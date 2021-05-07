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
import Profile from './Profile/Profile';
import userProfile from '../assets/userProfile.jpg';

function App() {

  return (
    <div className='App'>
      <Router>
        <Navigation/>
        <Switch>
          
          <Route path='/groups'>
            <GroupFeed/>
          </Route>

          <Route path='/profile'>
            <Profile/>
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
      <ul class="main-nav">
        <li>
          <Link to="/users">User Feed</Link>
        </li>
        <li>
          <Link to="/groups">Group Feed</Link>
        </li>
        <li className="push">
            <img alt="profile pic" src={userProfile}></img>
            <Link to="/profile">My Profile</Link>
        </li>
      </ul>
    </nav>
  )
}

export default App;
