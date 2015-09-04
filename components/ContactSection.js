import React from 'react';
import mui from 'material-ui';

const FlatButton = mui.FlatButton;
const FontIcon = mui.FontIcon;

const styles = {
	container: {
		width: '100%',
		display: 'flex',
		flexFlow: 'row nowrap'
	},
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
	button: {
		width: '100%'
	}
}

export default class ContactSection {
	render() {
		return (
			<section>
				<div style={{textAlign: 'center'}}>
					<h1>Contact</h1>
				</div>

				<div style={styles.container}>
				  <FlatButton style={styles.button} linkButton={true} href='mailto:ianwhite@utexas.edu?Subject=Oh%hai' label='Email Me - IanWhite@Utexas.edu'>
				    <FontIcon style={styles.buttonIcon} className='material-icons' hoverColor='#ddd'>email</FontIcon>
				  </FlatButton>
				</div>
			</section>
		);
	}
}