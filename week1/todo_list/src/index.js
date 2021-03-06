import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoItem from './item1';
import TodoItem2 from './item2';
import TodoItem3 from './item3';
import TodoItem4 from './item4';


ReactDOM.render(
  <React.StrictMode>
    <TodoItem />
    <TodoItem2 />
    <TodoItem3 />
    <TodoItem4/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

