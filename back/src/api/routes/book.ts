import express from 'express';
import * as bookController from '../controllers/book';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const fileFilter = (req: any, file: any, cb: any) => {
  // reject a file
  if (file.mimetye === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 20000 },
  fileFilter,
});

const router = express.Router();

router.get('/', bookController.getBookAll);
router.get('/:id', bookController.getBook);
router.post('/', upload.single('bookImage'), bookController.createBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

export default router;
