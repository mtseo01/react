import Card from '../UI/Card';
import './BookItem.css';
import { Link } from 'react-router-dom';
function Book(props: any) {
  return (
    <Card className="wrap">
      <div className="left-section">
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
          <p>likes : {props.data.likes}</p>
        </div>
        <Link to="/">home</Link>
      </div>
    </Card>
  );
}

export default Book;
