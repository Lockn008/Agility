import React, { Component } from 'react';

export class EditTaskModal extends Component {
	render() {
		return (
			<div class="modal fade" id="edit-task" tabindex="-1" role="dialog" aria-labelledby="AddProjectModal" aria-hidden="true">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLabel">Edit Task</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<form>
								<div class="form-group">
									<label for="formGroupExampleInput">Change Task Name</label>
									<input type="text" class="form-control" id="task-name-change" />
								</div>
								<div class="form-group">
									<label for="formGroupExampleInput">Change Task Manager</label>
									<input type="text" class="form-control" id="task-manager-change" />
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
									<input type="text" class="form-control" id="task-deadline-change" />
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