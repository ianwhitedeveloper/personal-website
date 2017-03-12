import React, { Component, PropTypes } from 'react';
import dispatch from 'redux';
import mui from 'material-ui';

const {Card, CardMedia, CardText, CardTitle, CardActions, FlatButton} = mui;

const styles = {
	project: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	cardActions: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		textAlign: 'center'
	},
	cardText: {
		textAlign: 'center'
	}
}

export default class OpenSourceProject {
	render() {
		const { project } = this.props;

		return (
			<div style={styles.project} className='col-xs-12 col-sm-12 col-md-6'>

				<Card style={{zIndex: '0'}}>
				  <CardMedia overlay={<CardTitle title={project.title} />}>
				    <img src={project.imgSrc} />
				  </CardMedia>
				  <CardActions style={styles.cardActions}>
						<FlatButton secondary={true} linkButton={true} target='_blank' href={project.url} label='Visit' />
				  </CardActions>
				  <CardText className='project_description' style={styles.cardText}>
				    {project.description}
				  </CardText>
				</Card>

			</div>
		);
	}
}

