import React, { Component, PropTypes } from 'react';
import dispatch from 'redux';

export default class Project extends Component {
	render() {
		const { likeProject, project } = this.props;

		return (
			<li>
				<h1>Project title:{project.title}</h1>
				<h2>Likes: {project.likes}</h2>
				<button onClick={() => likeProject(project.title)}>Like!</button>
			</li>
		);
	}
}

Project.propTypes = {
	likeProject: PropTypes.func.isRequired,
	project: PropTypes.object.isRequired
}