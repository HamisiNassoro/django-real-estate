import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
=======
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
>>>>>>> 902181add14f8a243a1f616d2902fedbedf60dc4
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
<<<<<<< HEAD
reportWebVitals();
=======
//reportWebVitals();
>>>>>>> 902181add14f8a243a1f616d2902fedbedf60dc4
