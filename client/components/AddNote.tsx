import styles from './AddNote.module.css';
import React from 'react';
import { useState, useCallback } from 'react';
import {
  faFileUpload,
  faMicrophoneAlt,
  faRecordVinyl,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDropzone } from 'react-dropzone';

export default ({ postNote, userid }) => {
  const send = async (userAudio: File) => {
    if (userAudio) {
      const formData = new FormData();
      formData.append('audio', userAudio, userAudio.name);
      formData.append('userID', userid);
      const newNote = await postNote(formData);
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    send(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const record = async () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(() => {
      console.log('test');
    });
  };

  return (
    <div className={styles.options}>
      {isDragActive ? (
        <div {...getRootProps()} className={styles.dragActive}>
          <p className={styles.title}>Drag and Drop</p>
          <input {...getInputProps()} type="file" className={styles.file} />
          <FontAwesomeIcon
            icon={faFileUpload}
            className={styles.icon}
          ></FontAwesomeIcon>
        </div>
      ) : (
        <div {...getRootProps()} className={styles.drag}>
          <p className={styles.title}>Drag and Drop</p>
          <input {...getInputProps()} type="file" className={styles.file} />
          <FontAwesomeIcon
            icon={faFileUpload}
            className={styles.icon}
          ></FontAwesomeIcon>
        </div>
      )}
      <div className={styles.record}>
        <p className={styles.title}>Record</p>
        <FontAwesomeIcon
          onClick={() => {
            record();
          }}
          icon={faMicrophoneAlt}
          className={styles.icon}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};
