import { instance } from './index';

type Data = {
  title: string;
  author: string;
  quote: string;
  imgUrl: string;
};

function createBook(data: Data) {
  return instance.post('books', data);
}

function getBooksAll() {
  return instance.get('books');
}

function getBook(id: string) {
  return instance.get('books/' + id);
}

function updateBook(id: string, data: Data) {
  return instance.put('books/' + id, data);
}

function deleteBook(id: string) {
  return instance.delete('books/' + id);
}

export { createBook, getBooksAll, getBook, updateBook, deleteBook };
