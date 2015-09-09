import React from 'react';
import mui from 'material-ui';
import Sticky from 'react-sticky';

const ian = require('../assets/images/ian-cig.jpg')

const AppBar = mui.AppBar;

const Paper = mui.Paper;
const styles = {
	logoStyles: {
		background: `url(${ian}) no-repeat center center`,
		height: '25vw',
		width: '25vw',
		maxWidth: '200px',
		maxHeight: '200px',
		backgroundSize: 'contain',
		borderRadius: '100%',
		boxShadow: '0 14px 45px rgba(0, 0, 0, 0.25), 0 10px 18px rgba(0, 0, 0, 0.22)',
		alignSelf: 'center'
	},
	header: {
		display: 'flex',
		flexFlow: 'row no-wrap',
		justifyContent: 'space-between',
		padding: '15px 0',
		marginTop: '50px'
	},
	figCaption: {
		textAlign: 'right',
		 maxWidth: '50%',
		 alignSelf: 'center',
		 fontFamily: '"Amatic SC", cursive'
	}
}

export default class Header {
	render() {
		return (
			<header style={styles.header}>
				<figure className='animated flipInY' style={styles.logoStyles}>
				</figure>
				<figcaption className='animated flipInX' style={styles.figCaption}>
					<h1 style={{fontSize: '1em'}}>Hi. My name is Ian White and I'm a full stack web developer based in <span style={{color: '#B0BEC5', fontSize: '1.2em', textShadow: '1px 1px 1px rgba(0, 0, 0, .5)'}}>Austin, TX.</span></h1>
					<p>I enjoy creating things with code!</p>
				</figcaption>
			</header>
		);
	}
}