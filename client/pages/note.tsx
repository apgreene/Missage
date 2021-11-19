import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import AddNote from '../components/AddNote';
import styles from './note.module.css';
import { useState, useEffect } from 'react';
import ApiService from './api/ApiService';
import Router from 'next/router';
import { useFetchUser } from '../utils/user';

const Named = () => {
  const [notes, setNotes] = useState([]);
  const { user, loading } = useFetchUser();

  useEffect(() => {
    ApiService.getAll().then((notes) => {
      setNotes(notes);
    });
  }, []);

  const postNote = (body) => {
    ApiService.postNote(body).then((note) => {
      setNotes([...notes, note]);
      Router.push(`/note/${note._id}`);
    });
  };

  const putNote = (icon: string, id: string) => {
    ApiService.putNote({ icon }, id).then((updatedNote) => {
      setNotes((noteList) => {
        const noteToUpdate = noteList.find((note) => note._id === id);
        noteToUpdate.icon = updatedNote.icon;
        return [...noteList];
      });
    });
  };

  return (
    <div className={styles.note}>
      {user ? (
        <>
          <Sidebar
            notes={
              notes ? notes.filter((note) => note['userID'] === user.sub) : null
            }
            putNote={putNote}
            pid='0'
          ></Sidebar>
          <AddNote postNote={postNote} userid={user.sub}></AddNote>
        </>
      ) : null}
    </div>
  );
};

export default Named;
