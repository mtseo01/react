import express, { Application } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import mongoose, { ConnectOptions } from 'mongoose';
import bodyParser from 'body-parser';

// 라우터
import bookRouter from './api/routes/book';

const app: Application = express();
dotenv.config();

// DB 연결
mongoose.set('strictQuery', true);
mongoose.connect(`${process.env.MONGO_URL}`, {
  useNewUrlParser: true,
} as ConnectOptions);

// 미들웨어
app.use(morgan('dev'));
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 라우팅
app.use('/books', bookRouter);

export default app;
