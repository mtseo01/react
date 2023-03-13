import './BookItem.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// component
import Card from '../UI/Card';

function BookItem(props: any) {
  const navigate = useNavigate();
  const [likes, setLikes] = useState<number>(props.data.likes);

  const clickLikeBtn = (event: any): void => {
    event.preventDefault();
    setLikes(likes + 1);
  };

  // 이미지 클릭 시 디테일 페이지로 이동
  const clickImgHandler = (): void => {
    navigate('detail/' + props.data._id);
  };

  return (
    <Card className="wrap">
      <div className="left-section" onClick={clickImgHandler}>
        <img src={props.data.imgUrl} alt={props.data.title}></img>
      </div>
      <div className="right-section">
        <div className="book-quote">
          <h4>{props.data.quote}</h4>
        </div>
        <div className="book-title">
          <p>{props.data.title}</p>
        </div>
        <div className="book-author">
          <p>{props.data.author}</p>
        </div>
        <div>
          <p>Likes: {likes}</p>
        </div>
        <div>
          <button onClick={clickLikeBtn}>Like</button>
        </div>
      </div>
    </Card>
  );
}

export default BookItem;
