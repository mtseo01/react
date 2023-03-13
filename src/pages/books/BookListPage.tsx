import { useEffect, useState } from 'react';

// components
import BookItem from '../../components/books/BookItem';
import AddButton from '../../components/UI/AddButton';

// types
import { Books } from '../../assets/types';

// APIs
import { getBooksAll } from '../../api/books';

function ListPage() {
  const [books, setBooks] = useState<Books[]>([]);

  // 책 리스트 데이터 불러오기
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getBooksAll();
        setBooks(res.data.docs);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="list-page">
      <div className="content">
        {books && books.map((book) => <BookItem key={book._id} data={book} />)}
      </div>
      <AddButton />
    </div>
  );
}

export default ListPage;
