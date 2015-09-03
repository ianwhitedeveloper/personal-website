import React from 'react';
import mui from 'material-ui';

const Paper = mui.Paper;
const logoStyles = {
	background: 'url("../assets/images/ian-cig.jpg") no-repeat center center',
	height: '25vw',
	width: '25vw',
	maxWidth: '200px',
	maxHeight: '200px',
	backgroundSize: 'contain',
	borderRadius: '100%',
	boxShadow: '0 14px 45px rgba(0, 0, 0, 0.25), 0 10px 18px rgba(0, 0, 0, 0.22)',
	alignSelf: 'center'
};

export default class Header {
	render() {
		return (
			<header style={{display: 'flex', flexFlow: 'row no-wrap', justifyContent: 'space-between', padding: '15px 0'}}>
				<figure style={logoStyles}>
				</figure>
				<figcaption style={{textAlign: 'right', maxWidth: '50%', alignSelf: 'center', fontFamily: '"Amatic SC", cursive'}}>
					<p>Hi. My name is Ian White and I'm a full stack web developer based in <span style={{color: '#B0BEC5', fontSize: '1.2em', textShadow: '1px 1px 1px rgba(0, 0, 0, .5)'}}>Austin, TX.</span></p>
					<p>I enjoy creating things with code!</p>
				</figcaption>
			</header>
		);
	}
}