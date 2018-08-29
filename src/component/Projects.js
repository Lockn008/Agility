import React, { Component } from 'react';
import { AddProjectModal } from "./AddProjectModal";


export class Projects extends Component {
	getProjects() {
		
	}

	submitProjects() {

	}
	
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
				    			<a data-toggle="collapse" href="#collapseExample" role="button">Agility</a>
				    		</div>
				    		<div className="col-2">
				    			<span>Next Due Date: 7/25/2018</span>
				    		</div>
				    		<div class="col-5">
				    			<div>Shared with Zach Lockner, Jim Bob Jones, Freddy Fivenites, and 27 others</div>
				    		</div>
				    		<div className="col-2 icons-right">
						    	<span>
						    		<button type="button" className="custom-btn bg-white" data-toggle="modal" data-target="#add-user"><i class="material-icons">person_add</i></button>
						    		<button type="button" className="custom-btn bg-white" data-toggle="modal" data-target="#edit-project"><i class="material-icons">edit</i></button>
						    		<button type="button" className="custom-btn bg-white" data-toggle="modal" data-target="#delete-project"><i class="material-icons">delete</i></button>
						    	</span>
						    </div>
						</div>
						<div className="collapse" id="#collapseList">
							<ul className="list-group list-group-flush">
								<li>Zach Lockner</li>
								<li>Jim Bob Jones</li>
							</ul>
						</div>
				    </li>
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
						    		<button type="button" className="custom-btn bg-white" data-toggle="modal" data-target="#add-user"><i class="material-icons">person_add</i></button>
						    		<button type="button" className="custom-btn bg-white" data-toggle="modal" data-target="#edit-project"><i class="material-icons">edit</i></button>
						    		<button type="button" className="custom-btn bg-white" data-toggle="modal" data-target="#delete-project"><i class="material-icons">delete</i></button>
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