import React, { Component } from 'react';

export class EditSubtaskModal extends Component {
	render() {
		return (
			<div class="modal fade" id="edit-subtask" tabindex="-1" role="dialog" aria-labelledby="AddProjectModal" aria-hidden="true">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLabel">Edit Subtask</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<form>
								<div class="form-group">
									<label for="formGroupExampleInput">Change Subtask Name</label>
									<input type="text" class="form-control" id="subtask-name-change" />
								</div>
								<div class="form-group">
									<label for="formGroupExampleInput">Change Subtask Manager</label>
									<input type="text" class="form-control" id="subtask-manager-change" />
								</div>
								<div class="form-group">
									<label for="formGroupExampleInput">Change Criticality</label>
									<select class="form-control">
										<option>Critical</option>
										<option>High</option>
										<option>Medium</option>
										<option>Low</option>
									</select>
								</div>
								<div class="form-group">
									<label for="formGroupExampleInput">Change Deadline</label>
									<input type="text" class="form-control" id="subtask-deadline-change" />
								</div>
								<div class="form-group">
									<label for="formGroupExampleInput">Change Completion</label>
									<select class="form-control">
										<option>Not yet started</option>
										<option>In progress</option>
										<option>Complete</option>
									</select>
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