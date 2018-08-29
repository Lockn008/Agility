import React, { Component } from 'react';

export class Navbar extends Component {
	onLogout() {
		this.props.logout();
	}

	onLogin() {
		this.props.login();
	}

	render() {
		// //need to use an if statement to check if user is null before digging through object, otherwise it will 
		// //kill the app with an error before it loads the user object
		// if (this.props.user != null) {
		// 	console.log(this.props.user.email);  //remove this once we have figured out pushing state to a higher level.
		// 	console.log(this.props.user.photoURL);
		// 	console.log(this.props.user.displayName);
		// }

		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
				<span className="navbar-brand justify-content-start">Agility</span>
				<div className="navbar-collapse justify-content-end" id="navbarSupportedContent">
					<ul className="navbar-nav">
						{this.props.user
							?
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									{this.props.user.displayName}
								</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">
									<button className="dropdown-item" onClick={this.onLogout.bind(this)}>Logout</button>
								</div>
							</li>
							:
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Welcome
								</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">
									<button className="dropdown-item" onClick={this.onLogin.bind(this)}>Login</button>
								</div>
							</li>
						}
					</ul>
				</div>
			</nav>
		);
	};
};
