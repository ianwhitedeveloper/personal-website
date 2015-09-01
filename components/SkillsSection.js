import React,  {PropTypes} from 'react';
import TextInput from './TextInput'

export default class SkillsSection {
	render() {
		const { skills, filterSkills, actions } = this.props;

		return (
			<section className='row'>
				<TextInput {...actions} placeholder='Search...' />
				<div style={{textAlign: 'center'}}>
					{skills.map((skill, i) => {
						if (skill.show) {
							return <div className='skill' style={{padding: '10px 10px', margin: '10px auto', float: 'left'}} key={i}>{skill.title}</div>
						}
					})}
				</div>
			</section>
		);
	}
}

SkillsSection.propTypes = {
	skills: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
}