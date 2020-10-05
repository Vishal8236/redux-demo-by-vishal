import React, { Component, useState } from 'react';
import {add_book,delete_book,edit_book} from './Book_Redux/BookAction';
import {connect} from 'react-redux';
import {ADD_BOOK,DELETE_BOOK,EDIT_BOOK} from './Book_Redux/BookType';


function Book_Home(props){
    const [book_name, setBook_n]= useState();
    const [show, setShow]=useState('show');
    const [book_author, setAuthor] = useState();
    const [book_price, setPrice] = useState();
    return(
        <div>
            <div className="fulid-container row text-center mt-5">
                <div className="col-4">
                         <button onClick={()=> setShow('addBook')} className="btn btn-primary">Add Book</button>
                     </div>
                     <div className="col-4">
                         <button onClick={()=>setShow('edit')} className="btn btn-info">Edit Book</button>
                     </div>
                     <div className="col-4">
                         <button onClick={()=>setShow('show')} className="btn btn-primary">Show Book</button>
                     </div>
                 </div>
                 {  show === 'show' && 
                    <table class="table mt-4">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Book Name</th>
                            <th scope="col">Author Name</th>
                            <th scope="col">Book Price</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.book_n.map((data, index)=>
                                <tr>
                                 <th scope="row">{index}</th>
                                 <td>{data}</td>
                                 <td>{props.book_author[index]}</td>
                                 <td>{props.book_price[index]}</td>
                                 <td><button onClick={()=>props.delete_book(index)} className="btn btn-info">Delete</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                }    
                { show === 'addBook' &&
                    <div className="card mt-5 ml-5 mr-5">
                        <div className="px-5 pt-3 pb-3">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Book Name</label>
                                <input onChange={e=>setBook_n(e.target.value)} type="text" class="form-control" placeholder="Enter Book Name" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Book Author Name</label>
                                <input onChange={e=>(setAuthor(e.target.value))}  type="text" class="form-control" placeholder="Enter Book Author Name" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Book Price</label>
                                <input onChange={e=>setPrice(e.target.value)} type="text" class="form-control" placeholder="Enter Book Price" />
                            </div>
                            <button type="submit" class="btn btn-primary" onClick={()=>props.add_book(book_name,book_author,book_price)}>Submit</button>
                        </div>
                    </div>
                }
        </div>
    ) 
} 

const mapStateToProps = (state) =>{
    return{
        book_n : state.book_n,
        book_author : state.book_author,
        book_price : state.book_price
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        add_book:function(book_name,book_author,book_price){
            dispatch(add_book(book_name,book_author,book_price));
        },
        delete_book:function(index){
            dispatch(delete_book(index));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Book_Home);
