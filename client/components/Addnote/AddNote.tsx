import styles from './AddNote.module.css';
import React from 'react';
import { useCallback } from 'react';
import {
  faFileUpload,
  faMicrophoneAlt,
  faStopCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDropzone } from 'react-dropzone';
import {
  useReactMediaRecorder,
} from 'react-media-recorder';

const Named = ({ postNote, userid }) => {
  const send = async (userAudio: File) => {
    if (userAudio) {
      const formData = new FormData();
      formData.append('audio', userAudio, userAudio.name);
      formData.append('userID', userid);
      await postNote(formData);
    }
  };

  // Upload by Drag and Drop
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    send(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // Upload by Record
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({
      ...{ audio: true },
      askPermissionOnMount: true,
      onStop: (blobUrl, blob) => {
        console.info(blobUrl, blob);
        const userAudio = new File([blob], 'User_Recorded.wav', {
          type: 'audio/wav',
        });
        console.log(mediaBlobUrl);
        send(userAudio);
      },
    });

  // ------------------------------------------------------------------------------
  return (
    <div className={styles.options}>
      <div
        {...getRootProps()}
        className={isDragActive ? styles.dragActive : styles.drag}
      >
        <p className={styles.title}>Drag and Drop</p>
        <input {...getInputProps()} type="file" className={styles.file} />
        <FontAwesomeIcon
          icon={faFileUpload}
          className={styles.icon}
        ></FontAwesomeIcon>
      </div>
      <div className={styles.record}>
        <p className={styles.title}>Record</p>
        <FontAwesomeIcon
          onClick={status === 'recording' ? stopRecording : startRecording}
          icon={status === 'recording' ? faStopCircle : faMicrophoneAlt}
          className={styles.icon}
        ></FontAwesomeIcon>
        {mediaBlobUrl ? <audio src={mediaBlobUrl} controls autoPlay /> : null}
      </div>
    </div>
  );
};

export default Named;
