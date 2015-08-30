import React, {Component, PropTypes} from 'react';
import Project from '../components/Project';

export default class SkillsSection extends Component {
	render() {
		const { skills, sortSkillsAsc, sortSkillsDesc } = this.props;

		return (
			<section>
				<ul>
					{skills.map((skill, i) => {
						return <li key={i}>{skill}</li>
					})}
				</ul>
				<button onClick={sortSkillsAsc}>Sort Skills ASC</button>
				<button onClick={sortSkillsDesc}>Sort Skills DESC</button>
			</section>
		);
	}
}

SkillsSection.propTypes = {
	skills: PropTypes.array.isRequired,
	sortSkillsAsc: PropTypes.func.isRequired,
	sortSkillsDesc: PropTypes.func.isRequired
}