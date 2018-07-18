import React, { Component } from 'react';
import database, { auth, provider, fireRoot } from './database';
import { Navbar } from "./component/Navbar";
import { Splash } from "./component/Splash";
import { Projects } from "./component/Projects";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      //currentItem: '',
      //username: '',
      //items: [],
      user: null
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      this.setState({
        user
      });

    });
  }

  logout() {
    auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
      //updates users portion of db on login (to check for updates of username, email, or avatar)
      var usersRef = fireRoot.child("users");
      usersRef.child(user.uid).set({
        "email": user.email,
        "username": user.displayName,
        "photoURL": user.photoURL
      });
    });

  }

  render() {
    //need to use an if statement to check if user is null before digging through object, otherwise it will 
    //kill the app with an error before it loads the user object
    // if (this.state.user != null) {  //need to user this.state here, can use this.props in components
    //   console.log(this.state.user.email);  //remove this once we have figured out pushing state to a higher level.
    //   console.log(this.state.user.photoURL);
    //   console.log(this.state.user.displayName);
    //   console.log(this.state.user);
    // }

    return (
      <div className="App">
        <Navbar user={this.state.user} login={this.login.bind(this)} logout={this.logout.bind(this)} />
        {this.state.user ? 
          <Projects user={this.state.user} /> :
          <Splash />
        }
      </div>
    );
  }
}

export default App;
