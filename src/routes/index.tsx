import { createBrowserRouter, Navigate } from 'react-router-dom';
import RootLayout from '../pages/books/RootLayout';
import BookListPage from '../pages/books/BookListPage';
import BookDetailPage from '../pages/books/BookDetailPage';
import BookPostPage from '../pages/books/BookPostPage';
import BookUpdatePage from '../pages/books/BookUpdatePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Navigate to="/books" /> },
      { path: '/books', element: <BookListPage /> },
      { path: '/books/detail/:id', element: <BookDetailPage /> },
      { path: '/books/post', element: <BookPostPage /> },
      { path: '/books/update/:id', element: <BookUpdatePage /> },
    ],
  },
]);

export default router;
