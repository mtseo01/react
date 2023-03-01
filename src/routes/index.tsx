import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import App from '../pages/App';
import BookListPage from '../pages/books/BookListPage';
import BookDetailPage from '../pages/books/BookDetailPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}></Route>
      <Route path="/books" element={<BookListPage />}></Route>
      <Route path="/books/detail/:id" element={<BookDetailPage />}></Route>
    </>
  )
);

export default router;
