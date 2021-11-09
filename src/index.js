import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);

/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from  "react-router-dom"
import {render} from "react-dom"

ReactDOM.render(
  render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
  )
); */


// My solution to this problem was to upgrade react and react-dom to their latest versions on NPM. Apparently I was importing a Component that was using the new fragment syntax and it was broken in my older version of React.