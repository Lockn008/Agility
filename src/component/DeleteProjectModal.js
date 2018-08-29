import React, { Component } from 'react';

export class DeleteProjectModal extends Component {
	render() {
		return (
			<div class="modal fade" id="delete-project" tabindex="-1" role="dialog" aria-labelledby="AddProjectModal" aria-hidden="true">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLabel">Delete Project</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<h5 class="modal-title" id="exampleModalLabel">Are you sure you want to delete this project?</h5>
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
							<button type="button" class="btn btn-primary">Delete Project</button>
						</div>
					</div>
				</div>
			</div>
		);
	};
};