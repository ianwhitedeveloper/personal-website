import React, {Component, PropTypes} from 'react';
import Project from '../components/Project';

export default class ProjectSection extends Component {
	render() {
		const { projects, actions } = this.props;

		const styles = {
			projects: {
				display: 'flex', 
				flexWrap: 'wrap'
			},
			header: {
				textAlign: 'center'
			}
		}

		return (
			<section>
				<div style={styles.header}>
					<h1>Projects</h1>
				</div>
				<div style={styles.projects}>
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