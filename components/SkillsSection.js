import React,  {PropTypes} from 'react';
import TextInput from './TextInput'

const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

export default class SkillsSection {
	render() {

		const { skills, actions } = this.props;
		
		return (
			<section>
				<div style={{textAlign: 'center'}}>
					<h1>Skills</h1>
				</div>

				<div style={{backgroundColor: '#fff', padding: '0 15px', boxShadow: '0 14px 45px rgba(0, 0, 0, 0.25), 0 10px 18px rgba(0, 0, 0, 0.22)'}}>
					<TextInput {...actions} placeholder='Search...' />
					<div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', textAlign: 'center'}}>
						{
							skills.map((skill, i) => {
								if (skill.show) {
									return <div className='skill' style={{padding: '10px 10px', margin: '10px auto'}} key={i}>{skill.title}</div>
								}
							})
						}
					</div>
				</div>
			</section>
		);
	}
}

SkillsSection.propTypes = {
	skills: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
}