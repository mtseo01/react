import express from 'express';
import * as bookController from '../controllers/book';

// multer 미들웨어
import upload from '../middlewares/multer';

const router = express.Router();

router.get('/', bookController.getBookAll);
router.get('/:id', bookController.getBook);
router.post('/', upload.single('bookImage'), bookController.createBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

export default router;
