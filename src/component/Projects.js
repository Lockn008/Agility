import React, { Component } from 'react';

export class Projects extends Component {
	render() {
		return (
			<div className="container">
				<ul className="collection">
					<li className="collection-item">{this.props.user ? this.props.user.email : "Loading..."}</li>
				</ul>
			</div>
		);
	};
};