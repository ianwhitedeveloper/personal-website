import React, {Component, PropTypes} from 'react';
import Project from '../components/Project';

export default class ProjectSection extends Component {
	render() {
		const { projects, actions } = this.props;

		return (
			<section>
				<div style={{display: 'flex', flexWrap: 'wrap'}}>
					{projects.map((project, i) => {
						return <Project key={i} project={project} {...actions} />
					})}
				</div>
			</section>
		);
	}
}

ProjectSection.propTypes = {
	projects: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
}