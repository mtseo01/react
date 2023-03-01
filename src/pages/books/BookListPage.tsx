import BookItem from '../../components/books/BookItem';
import books from '../../assets/data';

const ListPage = () => {
  const alertTitle = (title: string): void => {
    alert(title);
  };
  return (
    <div>
      <h1>list page</h1>
      <div>
        {books.map((book) => (
          <BookItem key={book.id} data={book} alertTitle={alertTitle} />
        ))}
      </div>
    </div>
  );
};

export default ListPage;
