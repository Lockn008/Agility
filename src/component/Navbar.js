import React, { Component } from 'react';

export class Navbar extends Component {
	render() {
		console.log(this.props.user);  //remove this once we have figured out pushing state to a higher level.
		return (
			<nav>
				<div className="nav-wrapper blue darken-3">
					<span className="brand-logo center">Agility</span>
					<ul id="nav-mobile" className="left hide-on-med-and-down" style={{paddingLeft:20}}>
						<li>Welcome, Guest!</li>
					</ul>
					<div id="nav-mobile" className="right hide-on-med-and-down" style={{paddingRight:20}}>
					    {this.props.user ?
							<button onClick={this.logout}>Log Out</button>
							:
							<button onClick={this.login}>Log In</button>
						}
					</div>
				</div>
			</nav>
		);
	};
};
