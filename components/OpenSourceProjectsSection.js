import React, {Component, PropTypes} from 'react';
import OpenSourceProject from '../components/OpenSourceProject';

export default class OpenSourceProjectSection extends Component {
	render() {
		const { openSourceProjects, actions } = this.props;

		const styles = {
			openSourceProjects: {
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
					<h1>Open Source Project Contributions</h1>
				</div>
				<div style={styles.openSourceProjects}>
					{openSourceProjects.map((project, i) => {
						return <OpenSourceProject key={i} project={project} {...actions} />
					})}
				</div>
			</section>
		);
	}
}

OpenSourceProjectSection.propTypes = {
	openSourceProjects: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
}