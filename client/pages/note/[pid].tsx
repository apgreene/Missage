import { useRouter } from 'next/router';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useState } from 'react';
import { useEffect } from 'react';
import ApiService from '../api/ApiService';
import Content from '../../components/Content/Content';
import styles from './pid.module.css';
import { useFetchUser } from '../../utils/user';
import AddNote from '../../components/AddNote';
import Router from 'next/router';

const Note = () => {
  const router = useRouter();
  const { pid } = router.query;
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

  const deleteNote = (id: string) => {
    ApiService.deleteNote(id).then(() =>
      setNotes(notes.filter((note) => note._id !== id))
    );
  };

  const editTitle = (title: string, id: string) => {
    ApiService.putNote({ title }, id).then((updatedNote) => {
      setNotes((noteList) => {
        const noteToUpdate = noteList.find((note) => note._id === id);
        noteToUpdate.title = updatedNote.title;
        return [...noteList];
      });
    });
  };

  const editText = (text: string, id: string) => {
    ApiService.putNote({ text }, id).then((updatedNote) => {
      setNotes((noteList) => {
        const noteToUpdate = noteList.find((note) => note._id === id);
        noteToUpdate.text = updatedNote.text;
        return [...noteList];
      });
    });
  };

  return (
    <div className={styles.note}>
      {user ? (
        <>
          <Sidebar
            notes={notes.filter((note) => note['userID'] === user.sub)}
            putNote={putNote}
            pid={pid}
          ></Sidebar>
          <Content
            notes={notes}
            pid={pid}
            putNote={putNote}
            editTitle={editTitle}
            editText={editText}
            deleteNote={deleteNote}
          ></Content>
        </>
      ) : null}
    </div>
  );
};

export default Note;
