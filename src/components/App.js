import './App.css';
import { useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import UserFeed from './Feed/UserFeed';
import GroupFeed from './Feed/GroupFeed';

function App() {

  return (
    <div className='App'>
      <Router>
        <Navigation/>
        <Switch>
          
          <Route path='/groups'>
            <GroupFeed/>
          </Route>

          <Route path='/'>
            <UserFeed/>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

function Navigation(props) {

  return (
    <nav>
      <ul>
        <li>
          <Link to="/users">User Feed</Link>
        </li>
        <li>
          <Link to="/groups">Group Feed</Link>
        </li>
      </ul>
    </nav>
  )
}

export default App;
