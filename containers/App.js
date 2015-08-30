import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actionCreators';
import ProjectSection from '../components/ProjectSection';

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

		// Make all action creators available to components via props and
		// bind to redux dipatch function http://rackt.github.io/redux/docs/api/bindActionCreators.html
		
		const actions = bindActionCreators(actionCreators, dispatch);

		return (
			<div>
				<ProjectSection projects={projects} actions={actions} />
				<pre>
				  redux state = { JSON.stringify(reduxState, null, 2) }
				</pre>
			</div>
		);
	}
}