import './BookItem.css';

// types
import { Books } from '../../assets/types';

// component
import Card from '../UI/Card';
function Book({ data }: { data: Books }) {
  const { title, author, quote, imgUrl, bookImage, likes } = data;
  return (
    <Card className="wrap">
      <div className="left-section">
        {imgUrl ? (
          <img src={imgUrl} alt={title}></img>
        ) : (
          <img src={`http://localhost:3001/` + bookImage} alt={title}></img>
        )}
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
          <p>likes : {likes}</p>
        </div>
      </div>
    </Card>
  );
}

export default Book;
