import { createBrowserRouter, Navigate } from 'react-router-dom';
import RootLayout from '../pages/books/RootLayout';
import BookListPage from '../pages/books/BookListPage';
import BookDetailPage from '../pages/books/BookDetailPage';
import BookPostPage from '../pages/books/BookPostPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Navigate to="/books" /> },
      { path: '/books', element: <BookListPage /> },
      { path: '/books/detail/:id', element: <BookDetailPage /> },
      { path: '/books/post', element: <BookPostPage /> },
    ],
  },
]);

export default router;
