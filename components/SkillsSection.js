import React, {Component, PropTypes} from 'react';
import TextInput from './TextInput'

export default class SkillsSection extends Component {
	constructor(props, context) {
	  super(props, context);
	  this.state = {
	    query: '',
	    skills: props.skills
	  };
	}

	render() {
		const { skills, filterSkills, actions } = this.props;

		return (
			<section>
				<TextInput {...actions} placeholder='testing' />
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
	sortSkillsAsc: PropTypes.func.isRequired,
	sortSkillsDesc: PropTypes.func.isRequired
}