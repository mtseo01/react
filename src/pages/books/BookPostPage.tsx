import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// types
import { BookObj } from '../../assets/types';

// component
import PostForm from '../../components/books/PostForm';

// API
import { createBook } from '../../api/books';

function BookPostPage() {
  const navigate = useNavigate();
  const [bookObj, setBookObj] = useState<BookObj>({
    title: '',
    author: '',
    imgUrl: '',
    quote: '',
    bookImage: '',
  });
  const [imageSrc, setImageSrc] = useState('');
  const [, setImgFile] = useState('');

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

  // 업로드 이미지 미리보기
  const imgFileChangeHandler = (event: any) => {
    const file = event.target.files[0];
    setImgFile(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageSrc(reader.result as string);
    };
  };

  // 제출
  const clickPostBtnHandler = async (event: any) => {
    event.preventDefault();
    console.log(event.target);
    if (
      bookObj.title.trim() === '' ||
      bookObj.author.trim() === '' ||
      bookObj.quote.trim() === ''
    ) {
      alert('모두 입력해 주세요.');
      return;
    } else {
      try {
        // 데이터 추가
        const formData = new FormData(event.target);

        // Book 생성하기
        const res = await createBook(formData as any);
        console.log(res);

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
        title={bookObj.title}
        author={bookObj.author}
        imgUrl={bookObj.imgUrl}
        quote={bookObj.quote}
        imageSrc={imageSrc}
        buttonName="생성"
        titleChangeHandler={titleChangeHandler}
        authorChangeHandler={authorChangeHandler}
        imgUrlChangeHandler={imgUrlChangeHandler}
        quoteChangeHandler={quoteChangeHandler}
        clickPostBtnHandler={clickPostBtnHandler}
        imgFileChangeHandler={imgFileChangeHandler}
      />
    </div>
  );
}

export default BookPostPage;
