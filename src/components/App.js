import './App.css';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import UserFeed from './Feed/UserFeed';
import GroupFeed from './Feed/GroupFeed';
import Profile from './Profile/Profile';
import Signup from './SignUp/Signup';
import Signin from './Signin/Signin';
import Chat from './Chat/Chat';
import userProfile from '../assets/userProfile.jpg';
import { Particles } from 'react-particles-js';
import particleData from "./particlesConfig";
import logo from "../assets/logo.png";
import { useHistory } from "react-router-dom"
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: "John Doe",
    email: "johndoe@email.com",
    interests: ['coding', 'drinking tea', 'drinking coffee', 'backgammon',]
  });
  const [signedIn, setSignedIn] = useState(true);

  return (
    <div className='App'>
      <Particles className="particles" params={particleData} />
      { (signedIn) ?
        <Router>
          <Navigation />
          <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
            <Switch>

              <Route path='/groups'>
                <GroupFeed />
              </Route>

              <Route path='/chat'>
                <Chat />
              </Route>

              <Route path='/profile'>
                <Profile user={currentUser} />
              </Route>

              <Route path='/'>
                <UserFeed currentUser={currentUser} />
              </Route>
            </Switch>
          </ReactCSSTransitionGroup>
        </Router>
        :
        <Signin />
      }

    </div>
  );
}

function Navigation(props) {
  let history = useHistory();
  /*useEffect(() => {
    let location = window.location.href
    document.getElementById(location.substring(location.lastIndexOf('/') + 1)).className = "selected";
  })*/

  return (
    <nav>
      <ul className="main-nav">
        <li className="logo">
          <img alt="logo" src={logo}></img>
        </li>
        <li id="users">
          <Link to="/users">User Feed</Link>
        </li>
        <li id="groups">
          <Link to="/groups">Group Feed</Link>
        </li>
        <li id="chat">
          <Link to="/chat">Chat</Link>
        </li>
        <li id="profile" className="push">
          <img alt="profile pic" src={userProfile}></img>
          <Link to="/profile">My Profile</Link>
        </li>
      </ul>
    </nav>
  )
}

export default App;
