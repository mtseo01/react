function BookItem(props) {
  return (
    <div className="content-area">
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
  );
}

export default BookItem;
