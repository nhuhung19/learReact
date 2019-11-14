import React from 'react'; //import default
import ReactDOM from 'react-dom'; //import default  
import './index.css';
import App from './App'; //import default

// import * as test from './test'; // lấy tất cả các biến trong module
// console.log(test)

//destructering - dùng cho trường hợp lấy 1 biến ở trong module
// import { hello } from './test'
// hello()

// function gán App(component react) vào html element có chứa id 'root'
ReactDOM.render(<App />, document.getElementById('root'));
