import React, { Component } from 'react';
import database, { auth, provider, usersRef, projectsRef } from '../database';

export class AddProjectModal extends Component {
	addProject() {
		var idRef = projectsRef.push({
			"projectName": document.getElementById("project-name-create").value,
			"projectLead": this.props.user.uid,
			"projectUsers": null,
			"tasks": null
		});
		var id = idRef.key;
		idRef.child("projectUsers").push(this.props.user.uid);
		usersRef.child(this.props.user.uid).child("projects").push(id);
	}

	render() {
		return (
			<div class="modal fade" id="add-project" tabindex="-1" role="dialog" aria-labelledby="AddProjectModal" aria-hidden="true">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLabel">Add a New Project</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<form>
								<div class="form-group">
									<label for="formGroupExampleInput">Project Name</label>
									<input type="text" class="form-control" id="project-name-create" />
								</div>
							</form>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
							<button type="button" class="btn btn-primary" onClick={this.addProject.bind(this)}>Create Project</button>
						</div>
					</div>
				</div>
			</div>
		);
	};
};