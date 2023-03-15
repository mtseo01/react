import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// types
import { BookObj } from '../../assets/types';

// component
import PostForm from '../../components/books/PostForm';

// API
import { getBook, updateBook } from '../../api/books';

export default function BookUpdatePage() {
  let { id } = useParams();
  const navigate = useNavigate();

  // 데이터 불러오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getBook(id);
        const dataObj = { ...data.doc };
        setBookObj({ ...dataObj });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    //
  }, [id]);

  const [bookObj, setBookObj] = useState<BookObj>({
    title: '',
    author: '',
    imgUrl: '',
    quote: '',
  });

  const titleChangeHandler = (event: any) => {
    setBookObj({ ...bookObj, title: event.target.value });
  };
  const authorChangeHandler = (event: any) => {
    setBookObj({ ...bookObj, author: event.target.value });
  };
  const imgUrlChangeHandler = (event: any) => {
    setBookObj({ ...bookObj, imgUrl: event.target.value });
  };
  const quoteChangeHandler = (event: any) => {
    setBookObj({ ...bookObj, quote: event.target.value });
  };

  const clickPostBtnHandler = async () => {
    if (
      bookObj.title.trim() === '' ||
      bookObj.author.trim() === '' ||
      bookObj.imgUrl.trim() === '' ||
      bookObj.quote.trim() === ''
    ) {
      alert('모두 입력해 주세요.');
      return;
    } else {
      const data = {
        ...bookObj,
      };
      try {
        // Book 수정하기
        const res = await updateBook(id, data);
        console.log(res);
        // 리스트 페이지로 이동
        navigate('/books/detail/' + id);
      } catch (error) {
        // 에러 처리
        console.log(error);
      }
    }
  };

  console.log('page ', bookObj);
  return (
    <div>
      <h1>수정 페이지</h1>
      <PostForm
        title={bookObj.title}
        author={bookObj.author}
        imgUrl={bookObj.imgUrl}
        quote={bookObj.quote}
        buttonName="수정"
        titleChangeHandler={titleChangeHandler}
        authorChangeHandler={authorChangeHandler}
        imgUrlChangeHandler={imgUrlChangeHandler}
        quoteChangeHandler={quoteChangeHandler}
        clickPostBtnHandler={clickPostBtnHandler}
      />
    </div>
  );
}
