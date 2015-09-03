import React, { Component, PropTypes } from 'react';
import dispatch from 'redux';
import mui from 'material-ui';

const Card = mui.Card;
const CardMedia = mui.CardMedia;
const CardText = mui.CardText;
const CardTitle = mui.CardTitle;
const CardActions = mui.CardActions;
const FlatButton = mui.FlatButton;

export default class Project extends Component {
	render() {
		const { likeProject, project } = this.props;

		return (
			<div className='col-md-6'>

				<Card>
				  <CardMedia overlay={<CardTitle title={project.title} subtitle={`Likes: ${project.likes}`}/>}>
				    <img src={project.imgSrc} />
				  </CardMedia>
				  <CardActions style={{textAlign: 'center'}}>
						<FlatButton primary={true} style={{width: '100%', display: 'block'}} onClick={() => likeProject(project.title)} label='Like!' />
				  </CardActions>
				  <CardText>
				    {project.description}
				  </CardText>
				  <CardActions style={{textAlign: 'center'}}>
						<FlatButton secondary={true} linkButton={true} href={project.url} label='Visit!' />
				  </CardActions>
				</Card>

			</div>
		);
	}
}

Project.propTypes = {
	likeProject: PropTypes.func.isRequired,
	project: PropTypes.object.isRequired
}