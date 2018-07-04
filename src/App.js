import React, { Component } from 'react';
import database, { auth, provider } from './database';
import { Navbar } from "./component/Navbar";
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
    });
  }

  render() {
    //need to use an if statement to check if user is null before digging through object, otherwise it will 
    //kill the app with an error before it loads the user object
    if (this.state.user != null) {  //need to user this.state here, can use this.props in components
      console.log(this.state.user.email);  //remove this once we have figured out pushing state to a higher level.
      console.log(this.state.user.photoURL);
      console.log(this.state.user.displayName);
    }

    return (
      <div className="App">
        <Navbar user={this.state.user} login={this.login.bind(this)} logout={this.logout.bind(this)} />
      </div>
    );
  }
}

export default App;
