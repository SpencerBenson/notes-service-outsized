import mongoose, { Document, Schema } from 'mongoose';

interface NoteModel extends Document {
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
}

const noteSchema = new Schema<NoteModel>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    tags: [{ type: String }],
  },
  { versionKey: false }
);

const Note = mongoose.model<NoteModel>('Note', noteSchema);

export default Note;
