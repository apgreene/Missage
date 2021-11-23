import Note from '../models/note.model';
import textify from './STT/index.stt';
import fs from 'fs';
import { Request, Response } from 'express'

interface fileData extends Request {
  files: any
}



const postNote = async (req : fileData, res: Response):Promise<any> => {
  
  try {
    const audioFile = req.files.audio;
    const userID = req.body.userID;
    console.log(audioFile.data);
    const audio:any | undefined = req.files.audio;
    audioFile.mv(`uploads/test.wav`, async () => {
      const text = await textify(`test.wav`);
      const newNote = await Note.create({ audio, text, userID });
      audioFile.mv(`uploads/${newNote._id}.wav`);
      res.send(newNote);
      res.status(201);
      fs.unlink(`uploads/test.wav`, () => {});
    });
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

const getAll = async (req : Request, res: Response) => {
  try {
    const notes = await Note.find();
    res.send(notes);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

const getNote = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const note = await Note.findOne({
      _id: id,
    });
    res.send(note);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

const deleteAll = async (req: Request, res: Response) => {
  try {
    await Note.deleteMany();
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

const deleteNote = async (req : Request, res: Response) => {
  try {
    const { id } = req.params;
    await Note.deleteOne({
      _id: id,
    });
    fs.unlink(`uploads/${id}.wav`, () => {});
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

const updateNote = async (req : Request, res: Response) => {
  try {
    const { id } = req.params;
    const { text, icon, title } = req.body;
    let note;
    if (text) {
      note = await Note.findByIdAndUpdate(
        { _id: id },
        { text: text },
        { new: true }
      );
      res.status(201);
      res.send(note);
    }
    if (title) {
      note = await Note.findByIdAndUpdate(
        { _id: id },
        { title: title },
        { new: true }
      );
      res.status(201);
      res.send(note);
    }
    if (icon) {
      note = await Note.findByIdAndUpdate(
        { _id: id },
        { icon: icon },
        { new: true }
      );
      res.status(201);
      res.send(note);
    }
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

export default {
  postNote,
  getNote,
  deleteNote,
  updateNote,
  getAll,
  deleteAll,
};
