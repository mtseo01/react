import express from 'express';
import * as bookController from '../controllers/book';

const router = express.Router();

router.get('/', bookController.getBookAll);
router.get('/:id', bookController.getBook);
router.post('/', bookController.createBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

export default router;
