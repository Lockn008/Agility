import React, { Component } from 'react';

export class AddUserModal extends Component {
	render() {
		return (
			<div class="modal fade" id="add-user" tabindex="-1" role="dialog" aria-labelledby="AddProjectModal" aria-hidden="true">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLabel">Add a New User by email</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<form>
								<div class="form-group">
									<label for="user-email">New User's Email address</label>
									<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter new user's email" />
								</div>
							</form>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
							<button type="button" class="btn btn-primary">Add User</button>
						</div>
					</div>
				</div>
			</div>
		);
	};
};