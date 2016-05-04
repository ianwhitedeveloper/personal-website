import React from 'react';
import mui from 'material-ui';

const { FlatButton, FontIcon, Paper } = mui;


const resumeLink = 'https://app.box.com/s/v05vtbwyaeyfgohtf8hnbd3fvzpu5w04';
const githubLink = 'https://github.com/Iawhite76';
const emailAddy = 'mailto:ian.white.developer@gmail.com';
const linkedin = 'https://www.linkedin.com/in/ianwhitedeveloper';

const styles = {
	buttonIcon: {
		position:'relative',
		fontSize:'24px',
		display:'inline-block',
		transition:'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
		height:'100%',
		verticalAlign:'middle',
		float:'left',
		paddingLeft:'12px',
		lineHeight:'36px',
		color:'#00bcd4'
	},
	buttonIconFA: {
		position:'relative',
		fontSize:'24px',
		display:'inline-block',
		transition:'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
		height:'100%',
		verticalAlign:'middle',
		float:'left',
		paddingLeft:'15px',
		lineHeight:'36px',
		color:'#00bcd4'
	},
	button: {
		width: '100%'
	}
}

export default class ContactSection {
	render() {
		return (
			<section>
				<div style={{textAlign: 'center'}}>
					<h1>Contact/About Me</h1>
				</div>

				<Paper className='row'>
					<div className='col-xs-12 col-sm-12 col-md-9'>
						<p>
							In 2013 a good friend of mine introduced me to web development and I was immediately hooked due to the creative nature of programming.
						</p>
						<p>In early 2014 I was accepted into <span>MakerSquare</span>, a highly selective coding bootcamp that helped launch me into a new career as a full stack web developer by teaching me programming basics.</p>
						<p>Bleeding edge web techonologies and frameworks intrigue me and I love experimenting with them in hopes of finding great new tools for my team.</p>
						<p>I'm interested in joining a collaborative, forward looking team where I can help solve problems and continue to grow as a developer.</p>
					</div>
					<div className='col-xs-12 col-sm-12 col-md-3'>
					  <FlatButton style={styles.button} linkButton={true} target='_self' href={emailAddy} label='Email'>
					    <FontIcon style={styles.buttonIcon} className='material-icons' hoverColor='#ddd'>email</FontIcon>
					  </FlatButton>

					  <FlatButton style={styles.button} linkButton={true} target='_blank' href={resumeLink} label='Resume'>
					    <FontIcon style={styles.buttonIcon} className='material-icons' hoverColor='#ddd'>description</FontIcon>
					  </FlatButton>

					  <FlatButton style={styles.button} linkButton={true} target='_blank' href={githubLink} label='Github'>
					    <FontIcon style={styles.buttonIconFA} className='fa fa-github' hoverColor='#ddd'></FontIcon>
					  </FlatButton>

					  <FlatButton style={styles.button} linkButton={true} target='_blank' href={linkedin} label='Linkedin'>
					    <FontIcon style={styles.buttonIconFA} className='fa fa-linkedin-square' hoverColor='#ddd'></FontIcon>
					  </FlatButton>
					</div>
				</Paper>

			</section>
		);
	}
}
