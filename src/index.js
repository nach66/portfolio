import ReactDOM from 'react-dom';
import React from 'react';
import './App.css';
import App from "./App";
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter as Router} from "react-router-dom"; 
// import LangRouter from "./LangRouter";

ReactDOM.render(
    <Router>
      {/* <LangRouter/> */}
      <ScrollToTop/>
      <App/>
    </Router>
  ,
  document.getElementById('root')
);