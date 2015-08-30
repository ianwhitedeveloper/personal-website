import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actionCreators';
import Project from '../components/project';

@connect((state /*, props*/) => {
    // This is our select function that will extract from the state the data slice we want to expose
    // through props to our component.
    return {
      reduxState: state,
      projects: state.projects
    }
})

export default class App extends Component {
	render() {
		const { reduxState, projects, dispatch } = this.props;
		const actions = bindActionCreators(actionCreators, dispatch);

		return (
			<div>
				<ul>
					{projects.map((project, i) => {
						return <Project key={i} project={project} {...actions} />
					})}
				</ul>
				<pre>
				  redux state = { JSON.stringify(reduxState, null, 2) }
				</pre>
			</div>
		);
	}
}