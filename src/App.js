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
    return (
      <div className="App">
        <Navbar user={this.state.user} />
      </div>
    );
  }
}

export default App;
