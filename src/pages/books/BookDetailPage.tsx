import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Book from '../../components/books/Book';

// types
import { Books } from '../../assets/types';

// API
import { getBook } from '../../api/books';

function BookDetailPage() {
  const [book, setBook] = useState<Books>();
  let { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getBook(id);
        setBook(res.data.doc);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id]);
  return (
    <div>
      <h1>detail</h1>
      {book && <Book data={book} />}
    </div>
  );
}

export default BookDetailPage;
