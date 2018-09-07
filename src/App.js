import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from "./component/Navbar";
import { Splash } from "./component/Splash";
import { Projects } from "./component/Projects";
import database, { auth, provider, dbroot } from "./database/database";

class App extends Component {
  constructor() {
    super();
    this.state={
      user: null,
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
  };

  logout() {
    auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
  };

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user
        });
        dbroot.child("users").child(this.state.user.uid).child("email").set(user.email);
        dbroot.child("users").child(this.state.user.uid).child("username").set(user.displayName);
        dbroot.child("users").child(this.state.user.uid).child("photoURL").set(user.photoURL);
      };
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar user={this.state.user} login={this.login.bind(this)} logout={this.logout.bind(this)} />
        {this.state.user ? 
          (this.state.project ?
            <Projects user={this.state.user} />  :
            <Projects user={this.state.user} /> 
          ) :
          <Splash login={this.login.bind(this)} logout={this.logout.bind(this)} />
        }
      </div>
    );
  };
};

export default App;
