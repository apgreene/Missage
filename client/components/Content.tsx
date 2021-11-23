import styles from './Content.module.css';
import React, { useState, useEffect, useRef } from 'react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Router from 'next/router';

let Picker;
if (typeof window !== 'undefined') {
  import('emoji-picker-react').then((_module) => {
    Picker = _module.default;
  });
}

const Named = ({ notes, pid, putNote, editTitle, editText, deleteNote }) => {
  const note = notes.find((note: {}) => note['_id'] === pid);
  console.log(note);

  const [show, setShow] = useState(false);

  const titleref = useRef(null);
  const textref = useRef(null);
  const iconref = useRef(null);
  const [title, setTitle] = useState('');
  const [editableTitle, setEditableTitle] = useState(false);
  const [noteText, setNoteText] = useState('');
  const [editableText, setEditableText] = useState(false);

  useEffect(() => {
    try {
      window.addEventListener('click', handleClickOutside, true);
    } catch (error) {
      console.error(error)
    }
  });

  const handleClickOutside = (e) => {
    if (titleref && editableTitle && !titleref.current?.contains(e.target))
      setEditableTitle(false);
    if (textref && editableText && !textref.current?.contains(e.target))
      setEditableText(false);
    if (iconref && show && !iconref.current?.contains(e.target)) {
      setShow(false);
    }
  };

  const editOn = () => {
    setTitle(note.title);
    setEditableTitle(true);
  };
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Escape' || event.key === 'Enter') {
      editTitle(title, pid);
      setEditableTitle(!editableTitle);
    }
  };

  const editOnText = () => {
    setNoteText(note.text);
    setEditableText(true);
  };
  const handleChangeText = (event) => {
    setNoteText(event.target.value);
  };
  const handleKeyDownText = (event) => {
    if (event.key === 'Escape') {
      editText(noteText, pid);
      setEditableText(!editableText);
    }
  };

  const giveMeTime = (timeStamp) => {
    const timeUnits = [
      ['day', 1000 * 60 * 60 * 24],
      ['hour', 1000 * 60 * 60],
      ['min', 1000 * 60],
    ];
    const deltaTime = Date.now() - new Date(timeStamp).getTime();
    for (let set of timeUnits) {
      let key = set[0];
      let value = set[1];
      let amount = Math.floor(deltaTime / Number(value));
      if (amount >= 1) {
        let plural = amount > 1 ? 's' : '';
        if (key === 'day' && amount >= 2) {
          return <p className={styles.time}>{timeStamp}</p>;
        }
        return <p className={styles.time}>{`${amount} ${key}${plural} ago`}</p>;
      }
    }
    return <p className={styles.time}>{`now`}</p>;
  };

  const audiobox = () => {
    if (note) {
      const data = window.atob(note.audio.data);
      const dataLength = data.length;
      let array = new Uint8Array(new ArrayBuffer(dataLength));
      for (let i = 0; i < dataLength; i++) {
        array[i] = data.charCodeAt(i);
      }
      const blob = new Blob([array], {
        type: note.audio.mimetype,
      });
      const blobUrl = URL.createObjectURL(blob);
      return <audio className={styles.audio} src={blobUrl} controls />;
    }
  };

  return (
    <div className={styles.component}>
      <div className={styles.iconBar}>
        <p ref={iconref} className={styles.noteIcon}>
          <div
            onClick={() => {
              !show ? setShow(true) : setShow(false);
            }}
          >
            {note?.icon}
          </div>
          {show ? (
            <Picker
              pickerStyle={{
                zindex: 10,
                position: 'absolute',
              }}
              onEmojiClick={(event, emojiObject) => {
                putNote(emojiObject.emoji, pid);
                setShow(false);
              }}
            />
          ) : null}
        </p>
        <FontAwesomeIcon
          onClick={() => {
            const after = deleteNote(pid);
            console.log(after);
            Router.push(`/note`);
          }}
          icon={faTrashAlt}
          className={styles.trashcan}
        ></FontAwesomeIcon>
      </div>
      <p ref={titleref}>
        {editableTitle ? (
          <input
            className={styles.titleInput}
            type="text"
            value={title}
            onChange={(e) => handleChange(e)}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <div className={styles.noteTitle} onClick={() => editOn()}>
            {note?.title}
          </div>
        )}
        <div className={styles.extraInfo}>
          {audiobox()}
          {giveMeTime(note?.createdAt)}
        </div>
      </p>
      <p ref={textref}>
        {editableText ? (
          <textarea
            className={styles.textInput}
            value={noteText}
            onChange={(e) => handleChangeText(e)}
            onKeyDown={handleKeyDownText}
          />
        ) : (
          <div className={styles.noteText} onClick={() => editOnText()}>
            {note?.text}
          </div>
        )}
      </p>
    </div>
  );
};

export default Named;
