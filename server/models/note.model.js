import { model, Schema } from 'mongoose';

const noteSchema = new Schema({
  title: { type: String, default: 'Untitled' },
  audio: { type: String, required: true },
  text: String,
  createdAt: { type: Date, default: Date.now },
  userID: { type: String, default: 'Snonymous' },
});

const Model = model('Note', noteSchema);

export default Model;
