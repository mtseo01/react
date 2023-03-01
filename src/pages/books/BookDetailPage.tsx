import { useState } from 'react';
import { useParams } from 'react-router-dom';
import bookData, { Books } from '../../assets/data';
import Book from '../../components/books/Book';
const BookDetailPage = () => {
  const [books] = useState<Books[]>(bookData);
  let { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>detail</h1>
      <Book data={books} id={id} />
    </div>
  );
};

export default BookDetailPage;
