import React, { Component } from 'react';

export class AddTaskModal extends Component {
	render() {
		return (
			<div className="modal fade" id="add-task" tabindex="-1" role="dialog" aria-labelledby="AddProjectModal" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">Add Task</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<form>
								<div className="form-group">
									<label for="formGroupExampleInput">Task Name</label>
									<input type="text" className="form-control" id="task-name-change" />
								</div>
								<div className="form-group">
									<label for="formGroupExampleInput">Add Task Manager</label>
									<input type="text" class="form-control" id="task-manager-change" />
								</div>
								<div className="form-group">
									<label for="formGroupExampleInput">Set Criticality</label>
									<select className="form-control">
										<option>Critical</option>
										<option>High</option>
										<option>Medium</option>
										<option>Low</option>
									</select>
								</div>
								<div className="form-group">
									<label for="formGroupExampleInput">Set Deadline</label>
									<input type="text" className="form-control" id="task-deadline-change" />
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
							<button type="button" className="btn btn-primary">Save Changes</button>
						</div>
					</div>
				</div>
			</div>
		);
	};
};