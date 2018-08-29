import React, { Component } from 'react';

export class EditProjectModal extends Component {
	render() {
		return (
			<div class="modal fade" id="edit-project" tabindex="-1" role="dialog" aria-labelledby="AddProjectModal" aria-hidden="true">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLabel">Edit Project</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<form>
								<div class="form-group">
									<label for="formGroupExampleInput">Change Project Name</label>
									<input type="text" class="form-control" id="project-name-change" />
								</div>
							</form>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
							<button type="button" class="btn btn-primary">Save Changes</button>
						</div>
					</div>
				</div>
			</div>
		);
	};
};