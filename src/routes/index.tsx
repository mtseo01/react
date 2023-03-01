import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import App from '../pages/App';
import ListPage from '../pages/books/BookListPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}></Route>
      <Route path="/books" element={<ListPage />}></Route>
    </>
  )
);

export default router;
