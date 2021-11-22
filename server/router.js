import express from 'express';
import controller from './controllers/note.controller.js';
const router = express.Router();

router.post('/note', controller.postNote);
router.get('/note', controller.getAll);
router.get('/note/:id', controller.getNote);
router.delete('/note/:id', controller.deleteNote);
router.delete('/note', controller.deleteAll);
router.put('/note/:id', controller.updateNote);

export default router;


