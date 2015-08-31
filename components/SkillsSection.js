import React,  {PropTypes} from 'react';
import TextInput from './TextInput'

export default class SkillsSection {
	render() {
		const { skills, filterSkills, actions } = this.props;

		return (
			<section>
				<TextInput {...actions} placeholder='Search...' />
				<ul>
					{skills.map((skill, i) => {
						if (skill.show) {
							return <li key={i}>{skill.title}</li>
						}
					})}
				</ul>
			</section>
		);
	}
}

SkillsSection.propTypes = {
	skills: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
}