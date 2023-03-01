import Card from '../UI/Card';
import './BookItem.css';
const Book = (props: any) => {
  let bookId = props.id;
  const id = parseInt(bookId);

  const index = props.data.findIndex((item: any) => item.id === id);

  return (
    <Card className="wrap">
      <div className="left-section">
        <img src={props.data[index].imgUrl} alt={props.data[index].title}></img>
      </div>
      <div className="right-section">
        <div className="book-quote">
          <h4>{props.data[index].quote}</h4>
        </div>
        <div className="book-title">
          <p>{props.data[index].title}</p>
        </div>
        <div className="book-author">
          <p>{props.data[index].author}</p>
        </div>
      </div>
    </Card>
  );
};

export default Book;
