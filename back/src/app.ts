import express, { Application, Request, Response } from 'express';

import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import mongoose, { ConnectOptions } from 'mongoose';
import bodyParser from 'body-parser';
const app: Application = express();
dotenv.config();

mongoose.set('strictQuery', true);
mongoose.connect(`${process.env.MONGO_URL}`, {
  useNewUrlParser: true,
} as ConnectOptions);

app.use(morgan('dev'));
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello');
});

export default app;
