import ReactDOM from 'react-dom';
import React from 'react';
import './App.css';
import LangRouter from "./LangRouter";
import { BrowserRouter as Router} from "react-router-dom"; 

ReactDOM.render(
    <Router>
      <LangRouter/>
    </Router>
  ,
  document.getElementById('root')
);