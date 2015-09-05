import React,  {PropTypes} from 'react';
import TextInput from './TextInput'

const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

export default class SkillsSection {
	render() {

		const { skills, actions } = this.props;
		
		const styles = {
			skillsMain: {
				backgroundColor: '#fff', 
				padding: '0 15px', 
				boxShadow: '0 14px 45px rgba(0, 0, 0, 0.25), 0 10px 18px rgba(0, 0, 0, 0.22)'
			},
			skillsContainer: {
				display: 'flex', 
				flexDirection: 'row',
				flexWrap: 'wrap', 
				textAlign: 'center'
			},
			skill: {
				display: 'flex', 
				flexDirection: 'row', 
				flexWrap: 'wrap', 
				textAlign: 'center'
			},
			header: {
				textAlign: 'center'
			}
		}

		return (
			<section>
				<div style={styles.header}>
					<h1>Skills</h1>
				</div>

				<div style={styles.skillsMain}>
					<TextInput {...actions} placeholder='Search...' />
					<div style={}>
						{
							skills.map((skill, i) => {
								if (skill.show) {
									return <div className='skill' style={styles.skill} key={i}>{skill.title}</div>
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