import React, { Component, PropTypes } from 'react';
import dispatch from 'redux';
import mui from 'material-ui';

const Paper = mui.Paper;

export default class Project extends Component {
	render() {
		const { likeProject, project } = this.props;

		return (
			<div className='col-md-6'>
				<Paper style={{textAlign: 'center'}} zDepth={4}>
					<a href={project.url} target='_blank'>
						<div>
							<h1>Project title:{project.title}</h1>
							<img width='100px' src={project.imgSrc} />
							<p>{project.description}</p>
						</div>
					</a>
					
					<h2>Likes: {project.likes}</h2>
					<button onClick={() => likeProject(project.title)}>Like!</button>
				</Paper>
			</div>
		);
	}
}

Project.propTypes = {
	likeProject: PropTypes.func.isRequired,
	project: PropTypes.object.isRequired
}