import { useState } from 'react';
import PostForm from '../../components/books/PostForm';

function BookPostPage() {
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
  const clickPostBtnHandler = () => {
    if (
      title.trim() === '' ||
      author.trim() === '' ||
      imgUrl.trim() === '' ||
      quote.trim() === ''
    ) {
      alert('모두 입력해주세요');
      return;
    }
    const data = {
      title,
      author,
      imgUrl,
      quote,
    };
    console.log(data);
    setTitle('');
    setAuthor('');
    setImgUrl('');
    setQuote('');
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
