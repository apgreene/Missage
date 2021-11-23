import pkg from 'mongoose';
const { model, Schema } = pkg;


const noteSchema = new Schema({
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


const Model = model('Note', noteSchema);

export default Model;
