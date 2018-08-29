import React, { Component } from 'react';

export class Project extends Component {
	render() {
		return (
			<div class="container">
				<div className="card">
				  <div className="card-header bg-dark text-light" style="text-align: center">
				  	<div className="row">
					  	<div className="col-1"></div>
					    <h4 className="col-10">Agility</h4>
					    <div className="col-1"><button type="button" className="custom-btn bg-dark text-white" data-toggle="modal" data-target="#add-task">
					    	<i className="material-icons" style="font-size: 32px">note_add</i>
					    </button></div>
					</div>
				  </div>
				  <ul className="list-group list-group-flush">
				    <li className="list-group-item">
				    	<div className="row">
				    		<div className="col-3">
				    			<a data-toggle="collapse" href="#" data-target="#collapseList" role="button" aria-expanded="false" aria-controls="collapseList">Design Front End</a>
				    		</div>
				    		<div className="col-2">
				    			<div>Task Manager</div>
				    		</div>
				    		<div className="col-2" style="text-align: center">
				    			<div>Criticality</div>
				    		</div>
				    		<div className="col-1 px-0">
				    			<span>12/25/2018</span>
				    		</div>
				    		<div className="col-2" style="text-align: center">
				    			<div>Completion</div>
				    		</div>
				    		<div className="col-2" style="text-align: right; font-size: 22px">
						    	<span>
						    		<button type="button" className="bg-white custom-btn" data-toggle="modal" data-target="#add-subtask"><i class="material-icons">note_add</i></button>
						    		<button type="button" className="bg-white custom-btn" data-toggle="modal" data-target="#edit-task"><i class="material-icons">edit</i></button>
						    		<button type="button" className="bg-white custom-btn" data-toggle="modal" data-target="#delete-task"><i class="material-icons">delete</i></button>
						    	</span>
						    </div>
						</div>
						<div className="collapse " id="collapseList">
							<table className="table bg-secondary" style="margin-top: 10px">
								<tbody>
									<tr>
										<th scope="row">1</th>
										<td>Subtask Name</td>
										<td>Subtask Owner</td>
										<td>Criticality</td>
										<td>Deadline</td>
										<td>Completion</td>
										<td>
											<span>
						    					<button type="button" className="custom-btn bg-secondary float-right" data-toggle="modal" data-target="#edit-subtask"><i class="material-icons">edit</i></button>
						    					<button type="button" className="custom-btn bg-secondary float-right" data-toggle="modal" data-target="#delete-subtask"><i class="material-icons">delete</i></button>
						    				</span>
						    			</td>
									</tr>
									<tr>
										<th scope="row">10</th>
										<td>Subtask Name</td>
										<td>Subtask Owner</td>
										<td>Criticality</td>
										<td>Deadline</td>
										<td>Completion</td>
										<td>
											<span>
						    					<button type="button" className="custom-btn bg-secondary float-right" data-toggle="modal" data-target="#edit-subtask"><i class="material-icons">edit</i></button>
						    					<button type="button" className="custom-btn bg-secondary float-right" data-toggle="modal" data-target="#delete-subtask"><i class="material-icons">delete</i></button>
						    				</span>
						    			</td>
									</tr>
									<tr>
										<th scope="row">100</th>
										<td>Subtask Name</td>
										<td>Subtask Owner</td>
										<td>Criticality</td>
										<td>Deadline</td>
										<td>Completion</td>
										<td>
											<span>
						    					<button type="button" className="custom-btn bg-secondary float-right" data-toggle="modal" data-target="#edit-subtask"><i class="material-icons">edit</i></button>
						    					<button type="button" className="custom-btn bg-secondary float-right" data-toggle="modal" data-target="#delete-subtask"><i class="material-icons">delete</i></button>
						    				</span>
						    			</td>
									</tr>
								</tbody>
							</table>
						</div>
				    </li>
				  </ul>
				</div>
			</div>
		);
	};
};