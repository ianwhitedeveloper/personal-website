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

	filterSkills(q) {
		this.setState({ skills: ['ruby'] });
	}

	render() {
		const { skills, sortSkillsAsc, sortSkillsDesc, filterSkills } = this.props;

		return (
			<section>
				<TextInput filterSkills={this.filterSkills} placeholder='testing' />
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