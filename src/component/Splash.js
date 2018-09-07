import React, { Component } from 'react';

export class Splash extends Component {
	onLogout() {
		this.props.logout();
	}
	
	render() {
		return (
			<div className="container">
				<h4>Please login using the button in the navbar to use Agility</h4>
				<button className="btn btn-primary" onClick={this.onLogout.bind(this)}>Logout</button>
			</div>
		);
	};
};