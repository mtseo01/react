import './BookItem.css';
import Card from '../UI/Card';
import { useState } from 'react';

const BookItem = (props: any) => {
  const [likes, setLikes] = useState<number>(props.data.likes);

  const clickLikeBtn = (event: any): void => {
    event.preventDefault();
    setLikes(likes + 1);
  };

  const clickImg = (event: any): void => {
    props.alertTitle(props.data.title);
  };

  return (
    <Card className="wrap">
      <div className="left-section" onClick={clickImg}>
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
};

export default BookItem;