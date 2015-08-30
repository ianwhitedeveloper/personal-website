import React, { Component, PropTypes, findDOMNode } from 'react';
import dispatch from 'redux';

export default class Project extends Component {
	render() {
		const { likeProject, project } = this.props;

		return (
			<ul>
					return	<li>
										<h1>Project title:{project.title}</h1>
										<h2>Likes: {project.likes}</h2>
										<button onClick={() => likeProject(project.id)}>Like!</button>
									</li>
			</ul>
		);
	}
}