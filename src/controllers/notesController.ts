import { Request, Response } from 'express';
import Note from '../models/Note';

const createNote = async (req: Request, res: Response) => {
  try {
    const { title, content, tags } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required fields.' });
    }

    const newNote = new Note({ title, content, tags });
    await newNote.save();

    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getNotesByTags = async (req: Request, res: Response) => {
  try {
    const { tags } = req.query;

    let query: any = {};
    if (tags) {
      query = { tags: { $in: [tags] } };
    }

    const notes = await Note.find(query);
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const getAllNotes = async (req: Request, res: Response) => {
  try {
   
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getNoteById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const note = await Note.findById(id);
    if (!note) {
      return res.status(404).json({ error: 'Note not found.' });
    }
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateNote = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { title, content, tags } = req.body;

    const note = await Note.findByIdAndUpdate(
      id,
      { title, content, tags, updatedAt: new Date() },
      { new: true }
    );

    if (!note) {
      return res.status(404).json({ error: 'Note not found.' });
    }

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteNote = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const note = await Note.findByIdAndDelete(id);
    if (!note) {
      return res.status(404).json({ error: 'Note not found.' });
    }

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default {
  createNote,
  getAllNotes,
  getNotesByTags,
  getNoteById,
  updateNote,
  deleteNote,
};
