import React from 'react';
import './App.css';
import LogIn from '../src/Componets/LogIn';
import Contacts from '../src/Componets/Contacts';
import Landing from '../src/Componets/Landing';
import NotFound from '../src/Componets/NotFound';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

export default function App() {
  return(
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to='/login'>LogIn</Link>
            </li>
            <li>
              <Link to='/contacts'>Contacts</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route to='/login'>
            <LogIn />
          </Route>
          <Route to="/contacts">
            <Contacts />
          </Route>
          <Route to='/'>
            <Landing />
          </Route>
          <Route to="/*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
  );
};

// export default App;

