import pkg from 'mongoose';
const { model, Schema } = pkg;
import DbTypes from '../Types/DbTypes'


const noteSchema = new Schema<DbTypes>({
  title: { type: String, default: 'Untitled' },
  icon: { type: String, default: '📜' },
  audio: {
    type: Object,
    required: true,
  },
  text: { type: String, default: 'empty' },
  createdAt: { type: Date, default: Date.now },
  userID: { type: String, default: 'Anonymous' },
  lastModified: { type: Date, default: null },
});


const Model = model<DbTypes>('Note', noteSchema);

export default Model;
