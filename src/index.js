import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './App.css';
import { BrowserRouter as Router} from "react-router-dom"; 
import ScrollToTop from "./ScrollToTop";

ReactDOM.render(
  <Router>
    <ScrollToTop/>
    <App/>
  </Router>
  ,
  document.getElementById('root')
);