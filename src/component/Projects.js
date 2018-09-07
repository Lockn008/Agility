import React, { Component } from 'react';
import { AddProjectModal } from "./AddProjectModal";
import database, { auth, provider, dbroot } from '../database/database';
// import { ProjectsRow } from "./ProjectsRow";
// import { AddUserModal } from "./AddUserModal";
// import { EditProjectModal } from "./EditProjectModal";
// import { DeleteProjectModal } from "./DeleteProjectModal";


export class Projects extends Component {
	constructor() {
		super();
		this.state={
			projects: null
		}
	}

	// loadProjects() {
	// 	dbroot.child("users").child(this.props.user.uid).child("projects").ref().on("child_added", function(snapshot) {
	// 		this.setState({
	// 			projects: snapshot
	// 		});
	// 	});
	// }

	render() {
		return (
			<div className="container">
				<div className="card">
				  <div className="card-header bg-dark text-light align-center">
				  	<div className="row">
					  	<div className="col-1"></div>
					    <h4 className="col-10">Projects</h4>
					    <div className="col-1"><button type="button" className="custom-btn bg-dark text-white" data-toggle="modal" data-target="#add-project">
					    	<i className="material-icons font-32">note_add</i>
					    </button></div>
					</div>
				  </div>
				  <ul className="list-group list-group-flush align-left">
				  
				    <li className="list-group-item">
				    	<div className="row">
				    		<div className="col-3">
				    			<a href="#">Miscellaneous Programming Project</a>
				    		</div>
				    		<div className="col-2">
				    			<span>Next Due Date: 8/1/2018</span>
				    		</div>
				    		<div className="col-5">
				    			<div>Shared with Zach Lockner and Jim Bob Jones</div>
				    		</div>
				    		<div className="col-2 icons-right">
						    	<span>
						    		<button type="button" className="custom-btn bg-white" data-toggle="modal" data-target="#add-user"><i className="material-icons">person_add</i></button>
						    		<button type="button" className="custom-btn bg-white" data-toggle="modal" data-target="#edit-project"><i className="material-icons">edit</i></button>
						    		<button type="button" className="custom-btn bg-white" data-toggle="modal" data-target="#delete-project"><i className="material-icons">delete</i></button>
						    	</span>
						    </div>
						</div>
				    </li>
				  </ul>
				</div>
				<AddProjectModal user={this.props.user} />
			</div>
		);
	};
};


				// <AddUserModal />
				// <EditProjectModal />
				// <DeleteProjectModal />
					// <ProjectsRow />