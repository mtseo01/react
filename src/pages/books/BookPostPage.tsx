import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// component
import PostForm from '../../components/books/PostForm';

// API
import { createBook } from '../../api/books';

function BookPostPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [quote, setQuote] = useState('');

  const titleChangeHandler = (event: any) => {
    setTitle(event.target.value);
  };
  const authorChangeHandler = (event: any) => {
    setAuthor(event.target.value);
  };
  const imgUrlChangeHandler = (event: any) => {
    setImgUrl(event.target.value);
  };
  const quoteChangeHandler = (event: any) => {
    setQuote(event.target.value);
  };

  // 제출
  const clickPostBtnHandler = async () => {
    if (
      title.trim() === '' ||
      author.trim() === '' ||
      imgUrl.trim() === '' ||
      quote.trim() === ''
    ) {
      alert('모두 입력해 주세요.');
      return;
    } else {
      const data = {
        title,
        author,
        imgUrl,
        quote,
      };
      try {
        // Book 생성하기
        const res = await createBook(data);
        console.log(res);

        setTitle('');
        setAuthor('');
        setImgUrl('');
        setQuote('');

        // 리스트 페이지로 이동
        navigate('/books');
      } catch (error) {
        // 에러 처리
        console.log(error);
      }
    }
  };

  return (
    <div>
      <h2>작성 페이지</h2>
      <PostForm
        title={title}
        author={author}
        imgUrl={imgUrl}
        quote={quote}
        titleChangeHandler={titleChangeHandler}
        authorChangeHandler={authorChangeHandler}
        imgUrlChangeHandler={imgUrlChangeHandler}
        quoteChangeHandler={quoteChangeHandler}
        clickPostBtnHandler={clickPostBtnHandler}
      />
    </div>
  );
}

export default BookPostPage;
