import { instance } from './index';

// types
import { BookObj } from '../assets/types';

function createBook(data: BookObj) {
  return instance.post('books', data);
}

function getBooksAll() {
  return instance.get('books');
}

function getBook(id: string | undefined) {
  return instance.get('books/' + id);
}

function updateBook(id: string | undefined, data: BookObj) {
  return instance.put('books/' + id, data);
}

function deleteBook(id: string | undefined) {
  return instance.delete('books/' + id);
}

export { createBook, getBooksAll, getBook, updateBook, deleteBook };
