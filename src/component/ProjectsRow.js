import React, { Component } from 'react';

export class ProjectsRow extends Component {

	render () {
		return (
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
		)
	}
}