import React, { Component } from 'react';
import database, { auth, provider, dbroot } from '../database/database';

export class AddProjectModal extends Component {
	addProject() {
		var idRef = dbroot.child("projects").push({
			"projectName": document.getElementById("project-name-create").value,
			"projectLead": this.props.user.uid,
			"projectUsers": null,
			"tasks": null
		});
		var id = idRef.key;
		idRef.child("projectUsers").push(this.props.user.uid);
		dbroot.child("users").child(this.props.user.uid).child("projects").push(id);
	}

	render() {
		return (
			<div className="modal fade" id="add-project" tabIndex="-1" role="dialog" aria-labelledby="AddProjectModal" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">Add a New Project</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<form>
								<div className="form-group">
									<label htmlFor="formGroupExampleInput">Project Name</label>
									<input type="text" className="form-control" id="project-name-create" />
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
							<button type="button" className="btn btn-primary" onClick={this.addProject.bind(this)}>Create Project</button>
						</div>
					</div>
				</div>
			</div>
		);
	};
};