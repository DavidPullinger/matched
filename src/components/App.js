import './App.css';
import { useState } from 'react';
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
import { Particles } from 'react-particles-js';
import particleData from "./particlesConfig";
import logo from "../assets/logo.png";
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: "John Doe",
    email: "johndoe@email.com",
    interests: ['coding', 'drinking tea', 'drinking coffee', 'backgammon',]
  });


  return (
    <div className='App'>
      <Particles className="particles" params={particleData} />
      <Router>
        <Navigation />
        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          <Switch>
            <Route path='/users'>
              <UserFeed />
            </Route>

            <Route path='/groups'>
              <GroupFeed />
            </Route>

            <Route path='/profile'>
              <Profile user={currentUser} />
            </Route>

            <Route path='/'>
              <UserFeed />
            </Route>
          </Switch>
        </ReactCSSTransitionGroup>
      </Router>
    </div>
  );
}

function Navigation(props) {

  return (
    <nav>
      <ul className="main-nav">
        <li className="logo">
          <img alt="logo" src={logo}></img>
        </li>
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
