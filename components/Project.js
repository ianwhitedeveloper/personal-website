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
			<div className='project col-md-6'>

				<Card>
				  <CardMedia overlay={<CardTitle title={project.title} subtitle={`Likes: ${project.likes}`}/>}>
				    <img src={project.imgSrc} />
				  </CardMedia>
				  <CardActions style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
						<FlatButton primary={true}  onClick={() => likeProject(project.title)} label='Like!' />
						<FlatButton secondary={true} linkButton={true} target='_blank' href={project.url} label='Visit!' />
				  </CardActions>
				  <CardText className='project_description' style={{textAlign: 'center', }}>
				    {project.description}
				  </CardText>
				</Card>

			</div>
		);
	}
}

Project.propTypes = {
	likeProject: PropTypes.func.isRequired,
	project: PropTypes.object.isRequired
}