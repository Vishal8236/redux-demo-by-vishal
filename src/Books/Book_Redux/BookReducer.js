import {add_book,edit_book,delete_book} from './BookAction';
import {ADD_BOOK,DELETE_BOOK,EDIT_BOOK} from './BookType';

const initialState = {
    book_n : ['java'],
    book_author : ['vishal patidar'],
    book_price : [100]
}
export const book_reducer = (state=initialState, action) =>{
    switch(action.type){
        case ADD_BOOK:
            console.log(action.payload.book_n)
            return{
                ...state,
                book_n : [...state.book_n,action.payload.book_n],
                book_author:[...state.book_author,action.payload.book_a ],
                book_price : [...state.book_price,action.payload.book_p ]
            }

        case EDIT_BOOK:
            return{
                ...state,
                book_author:[...state.book_author, ]
            }

        case DELETE_BOOK:
            var book_n = state.book_n;
            var book_n_index = book_n.splice(action.payload,1);
            delete book_n[book_n_index];
            //
            var book_author = state.book_author;
            var book_a_index = book_author.splice(action.payload,1);
            delete book_author[book_a_index];
            //
            var book_p = state.book_price;
            var book_p_index = book_p.splice(action.payload,1);
            delete book_p[book_p_index];
            return{
                ...state,
                book_n : [...state.book_n],
                book_author:[...state.book_author],
                book_price : [...state.book_price]
            }

        default: return state
    }
}