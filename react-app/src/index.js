import { BrowserRouter, Route, Link } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './component/home'
import About from './component/about'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <div>
        <Route path="/"  exact render={() => <Home/>}></Route>
        <Route path="/about"  render={() => <About/>}></Route>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
