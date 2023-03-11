import BookItem from '../../components/books/BookItem';
import AddButton from '../../components/UI/AddButton';
import books from '../../assets/data';

function ListPage() {
  const alertTitle = (title: string): void => {
    alert(title);
  };
  return (
    <div className="list-page">
      <div className="content">
        {books.map((book) => (
          <BookItem key={book.id} data={book} alertTitle={alertTitle} />
        ))}
      </div>
      <AddButton />
    </div>
  );
}

export default ListPage;
