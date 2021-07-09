import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Example of rendering a jsx element
// const greeting = React.createElement('h1', {}, 'Hello world!')

//jsx examples
// const currentDate = () => {
//   const date = new Date();
//   return date.toDateString();
// }

// const greeting = <h1> hello world!! the date today is: {currentDate()} </h1>;

ReactDOM.render(<App/>,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
