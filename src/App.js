import React from 'react';
import logo from './logo.svg';
import './App.css';
import CakeConatiner from './component/CakeConatiner';
import {Provider} from 'react-redux';
import store from './Books/Book_Redux/Book_Store';
import Book_Home from './Books/Book_Home';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Book_Home />
      </div>
    </Provider>
  );
}

export default App;
