import React, { Component } from 'react';

export class Projects extends Component {
	getProjects() {
		
	}
	
	render() {
		return (
			<div className="container">
				<ul className="collection with-header">
					<li className="collection-header"><h4>Projects</h4></li>
					<li className="collection">
						<div className="row">
							<form>
								<div className="col s10">
									<div className="input-field">
										<input placeholder="Project Name" id="project_name" type="text" className="validate" />
									</div>
								</div>
								<div className="col s2">
									<button className="btn" type="submit" name="add_project">Add Project</button>
								</div>
							</form>
						</div>
					</li>
				</ul>
			</div>
		);
	};
};