import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Book from '../../components/books/Book';

// types
import { Books } from '../../assets/types';

// API
import { getBook, deleteBook } from '../../api/books';

function BookDetailPage() {
  const [book, setBook] = useState<Books>();
  let { id } = useParams();
  const navigate = useNavigate();

  // 포스트 삭제
  const clickDeleteBtnHandler = async () => {
    // eslint-disable-next-line no-restricted-globals
    if (!confirm('정말 삭제하시겠습니까?')) return;
    try {
      const res = deleteBook(id);
      console.log(res);
      navigate('/books');
    } catch (error) {
      // 에러 핸들하기
      console.log(error);
    }
  };

  // 데이터 불러오기
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
      <div>{book && <Book data={book} />}</div>
      <div>
        <button onClick={() => navigate('/books/update/' + id)}>
          수정하기
        </button>
        <button onClick={clickDeleteBtnHandler}>삭제하기</button>
      </div>
    </div>
  );
}

export default BookDetailPage;
