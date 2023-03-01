import './App.css';
import BookItem from './components/Book/BookItem';
import books from './assets/data';

const App = () => {
  const alertTitle = (title: string): void => {
    alert(title);
  };

  return (
    <div className="App">
      <h1>Here With Contents!</h1>
      <div>
        {books.map((book) => (
          <BookItem key={book.id} data={book} alertTitle={alertTitle} />
        ))}
      </div>
    </div>
  );
};

export default App;
