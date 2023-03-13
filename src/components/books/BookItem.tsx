import './BookItem.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// types
import { Books } from '../../assets/types';

// component
import Card from '../UI/Card';

function BookItem({ data }: { data: Books }) {
  const { _id, title, author, quote, imgUrl, likes } = data;
  const navigate = useNavigate();
  const [countLikes, setLikes] = useState<number>(likes);

  const clickLikeBtn = (event: any): void => {
    event.preventDefault();
    setLikes(countLikes + 1);
  };

  // 이미지 클릭 시 디테일 페이지로 이동
  const clickImgHandler = (): void => {
    navigate('detail/' + _id);
  };

  return (
    <Card className="wrap">
      <div className="left-section" onClick={clickImgHandler}>
        <img src={imgUrl} alt={title}></img>
      </div>
      <div className="right-section">
        <div className="book-quote">
          <h4>{quote}</h4>
        </div>
        <div className="book-title">
          <p>{title}</p>
        </div>
        <div className="book-author">
          <p>{author}</p>
        </div>
        <div>
          <p>Likes: {countLikes}</p>
        </div>
        <div>
          <button onClick={clickLikeBtn}>Like</button>
        </div>
      </div>
    </Card>
  );
}

export default BookItem;
