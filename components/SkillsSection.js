import React,  {PropTypes} from 'react';
import TextInput from './TextInput'

const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

export default class SkillsSection {
	render() {
		const { skills, filterSkills, actions } = this.props;

		let filteredSkills = skills.map((skill, i) => {
					if (skill.show) {
						return <div className='skill' style={{padding: '10px 10px', margin: '10px auto'}} key={i}>{skill.title}</div>
					}
				});

		return (

			<section style={{backgroundColor: '#fff', padding: '0 15px', boxShadow: '0 14px 45px rgba(0, 0, 0, 0.25), 0 10px 18px rgba(0, 0, 0, 0.22)'}}>
				<div className='row'>
					<TextInput {...actions} placeholder='Search...' />
					<div>
						<ReactCSSTransitionGroup style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', textAlign: 'center'}} transitionName="example">
		          {filteredSkills}
		        </ReactCSSTransitionGroup>
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