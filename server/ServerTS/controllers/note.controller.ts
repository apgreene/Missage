import Note from '../models/note.model';
import textify from './STT/index.stt';
import fs from 'fs';
import { Request, Response } from 'express'

interface fileData extends Request {
  files: {
    audio: {
      name: string
      data: Buffer
      size: number
      encoding: string
      tempFilePath: string
      truncated: false
      mimetype: string
      md5: string
      mv: any
    } 
  }
}

interface DbTypes {
  title: string
  icon: string
  audio: {}
  text: string
  createdAt? : Date
  userID: string
  lastModified: Date
}



const postNote = async (req : fileData, res: Response):Promise<any> => {
  
  try {
    const audioFile = req.files.audio;
    console.log("this is the audioFile.mv: ", audioFile.mv);
    console.log("typeof: ", typeof audioFile.mv);
    const userID = req.body.userID;
    const audio = req.files.audio;
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
    const notes: DbTypes = await Note.find();
    res.send(notes);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

const getNote = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const note: DbTypes = await Note.findOne({
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
    let note: DbTypes;
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
