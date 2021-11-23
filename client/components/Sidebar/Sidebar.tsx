import Link from 'next/link';
import styles from './Sidebar.module.css';
import React, { useState } from 'react';
import { useFetchUser } from '../../utils/user';

let Picker;
if (typeof window !== 'undefined') {
  import('emoji-picker-react').then((_module) => {
    Picker = _module.default;
  });
}

const Named = ({ notes, putNote, pid }) => {
  const { user, loading } = useFetchUser();

  const [showID, setShowID] = useState('');

  const noteList = (notes: []) => {
    if (notes) {
      return notes.map((note) => (
        <div key={note['_id']}>
          <div
            className={
              !showmenu
                ? note['_id'] === pid
                  ? styles.selected
                  : styles.titleBox
                : styles.mobileItem
            }
          >
            <div
              className={styles.icon}
              onClick={() => {
                !showID ? setShowID(note['_id']) : setShowID('');
              }}
            >
              {note['icon']}
            </div>
            <Link href={`/note/${note['_id']}`}>
              <a className={styles.title}>{note['title']}</a>
            </Link>
          </div>
          {showID === note['_id'] ? (
            <Picker
              pickerStyle={{ position: 'absolute' }}
              className={styles.picker}
              onEmojiClick={(event, emojiObject) => {
                putNote(emojiObject.emoji, note['_id']);
                setShowID('');
              }}
            />
          ) : null}
        </div>
      ));
    }
  };

  const [showmenu, setShowMenu] = useState(false);

  const openList = () => {
    setShowMenu(!showmenu);
    console.log(showmenu);
  };

  return (
    <div className={styles.side}>
      {user ? (
        <>
          <div className={styles.info}>
            <img className={styles.pic} src={user.picture} alt="" />
            {`${user.given_name}'s notes`}
          </div>
          <div className={styles.note}>
            <button onClick={openList} className={styles.listTitle}>
              My Notes
            </button>
            {noteList(notes)}
          </div>
        </>
      ) : null}
      <Link href="/note">
        <a className={styles.new}>
          <div>New Note</div>
        </a>
      </Link>
      <Link href="/product">
      <div className={styles.return}>
        <a>
        <h5 className={styles.returnHeader}>Back to home page... </h5>
        </a>
      </div>
      </Link>
    </div>
  );
};

export default Named;
