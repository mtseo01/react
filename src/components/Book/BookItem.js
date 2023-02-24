import './BookItem.css';
import Card from '../UI/Card.js';

function BookItem(props) {
  return (
    <Card className="wrap">
      <div className="left-section">
        <p>img section</p>
      </div>
      <div className="right-section">
        <div className="book-quote">
          <h3>{props.data.quote}</h3>
        </div>
        <div className="book-title">
          <p>{props.data.title}</p>
        </div>
        <div className="book-author">
          <p>{props.data.author}</p>
        </div>
      </div>
    </Card>
  );
}

export default BookItem;
