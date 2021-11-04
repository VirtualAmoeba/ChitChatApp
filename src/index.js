import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// My solution to this problem was to upgrade react and react-dom to their latest versions on NPM. Apparently I was importing a Component that was using the new fragment syntax and it was broken in my older version of React.