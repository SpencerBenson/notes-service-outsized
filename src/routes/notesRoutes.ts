import express from 'express';
import notesController from '../controllers/notesController';

const router = express.Router();

// Notes Routes
router.post('/api/notes', notesController.createNote);
router.get('/api/notes', notesController.getAllNotes);
router.get('/api/notes', notesController.getNotesByTags);
router.get('/api/notes/:id', notesController.getNoteById);
router.put('/api/notes/:id', notesController.updateNote);
router.delete('/api/notes/:id', notesController.deleteNote);

export default router;
