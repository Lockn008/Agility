import React, { Component } from 'react';

export class Navbar extends Component {
	onLogout() {
		this.props.logout();
	}

	onLogin() {
		this.props.login();
	}

	render() {
		//need to use an if statement to check if user is null before digging through object, otherwise it will 
		//kill the app with an error before it loads the user object
		if (this.props.user != null) {
			console.log(this.props.user.email);  //remove this once we have figured out pushing state to a higher level.
			console.log(this.props.user.photoURL);
			console.log(this.props.user.displayName);
		}

		return (
			<nav>
				<div className="nav-wrapper blue darken-3">
					<span className="brand-logo center">Agility</span>
					<ul id="nav-mobile" className="left hide-on-med-and-down" style={{paddingLeft:20}}>
						<li>Welcome, Guest!</li>
					</ul>
					<div id="nav-mobile" className="right hide-on-med-and-down" style={{paddingRight:20}}>
					    {this.props.user ?
							<button onClick={this.onLogout.bind(this)}>Log Out</button>
							:
							<button onClick={this.onLogin.bind(this)}>Log In</button>
						}
					</div>
				</div>
			</nav>
		);
	};
};
