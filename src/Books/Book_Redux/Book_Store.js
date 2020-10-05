import {createStore} from 'redux';
import {book_reducer} from './BookReducer';

const store = createStore(book_reducer);
export default store;