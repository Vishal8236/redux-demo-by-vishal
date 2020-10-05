import {ADD_BOOK,DELETE_BOOK,EDIT_BOOK} from './BookType';
export const add_book = (book_n,book_a,book_p) =>{
    return{
        type: ADD_BOOK,
        payload:{'book_n':book_n,'book_a':book_a,'book_p':book_p}
    }
}
export const edit_book = () =>{
    return{
        type: EDIT_BOOK
    }
}
export const delete_book = (index) =>{
    return{
        type: DELETE_BOOK,
        payload:index
    }
}