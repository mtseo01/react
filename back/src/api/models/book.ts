import mongoose from 'mongoose';

export interface IBook {
  _id: string;
  title: string;
  author: string;
  quote: string;
  imgUrl: string;
  likes: number;
  bookImage: string;
}

export interface IBookModel extends IBook {}

const bookSchema = new mongoose.Schema<IBook, IBookModel>({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  author: { type: String, required: true },
  quote: { type: String, required: true },
  imgUrl: { type: String, required: true },
  likes: { type: Number, default: 0 },

  // image file
  bookImage: { type: String },
});

export default mongoose.model<IBookModel>('Book', bookSchema);
