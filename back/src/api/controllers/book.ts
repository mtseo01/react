import { Request, Response } from 'express';
import mongoose, { Document } from 'mongoose';
import Book from '../models/book';

const createBook = (req: Request, res: Response) => {
  console.log(req.file);
  const book = new Book({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    author: req.body.author,
    quote: req.body.quote,
    imgUrl: req.body.imgUrl,

    // image file
    bookImage: req.file?.path,
  });
  book
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: '데이터를 생성하였습니다.',
        result,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        error: err,
        success: false,
        message: '데이터 생성을 실패하였습니다.',
      });
    });
};

const getBookAll = (req: Request, res: Response) => {
  Book.find<Document>()
    .then((docs) => {
      if (docs.length <= 0) {
        return res.status(404).json({
          success: false,
          message: '데이터가 존재하지 않습니다.',
        });
      }

      return res.status(200).json({
        count: docs.length,
        docs,
        success: true,
        message: '책 데이터를 불러왔습니다.',
      });
    })
    .catch((err) => {
      return res.status(500).json({
        error: err,
        success: false,
        message: '서버 에러 발생',
      });
    });
};

const getBook = (req: Request, res: Response) => {
  let id = req.params.id;
  console.log(id);
  Book.findOne({ _id: id })
    .then((doc) => {
      if (doc) {
        return res.status(200).json({
          doc,
          success: true,
          message: '데이터를 불러왔습니다.',
        });
      } else {
        return res.status(404).json({
          success: false,
          message: '데이터가 존재하지 않습니다.',
        });
      }
    })
    .catch((err) => {
      return res.status(500).json({
        error: err,
        success: false,
        message: '서버 에러 발생',
      });
    });
};

const updateBook = (req: Request, res: Response) => {
  let id = req.params.id;
  Book.findByIdAndUpdate(id, { $set: req.body }, { new: true })
    .then((result) => {
      return res.status(200).json({
        success: true,
        message: '데이터를 변경하였습니다.',
        result,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        error: err,
        success: false,
        message: '서버 에러 발생',
      });
    });
};

const deleteBook = (req: Request, res: Response) => {
  let id = req.params.id;
  Book.deleteOne({ _id: id })
    .then((result) => {
      return res.status(200).json({
        success: true,
        message: '데이터를 삭제하였습니다.',
        result,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        error: err,
        success: false,
        message: ' 서버 에러 발생',
      });
    });
};

export { createBook, getBookAll, getBook, updateBook, deleteBook };
