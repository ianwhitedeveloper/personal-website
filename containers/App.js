import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actionCreators';
import ProjectSection from '../components/ProjectSection';
import SkillsSection from '../components/SkillsSection';
import EducationSection from '../components/EducationSection';
import Header from '../components/Header';

import mui from 'material-ui';
let ThemeManager = new mui.Styles.ThemeManager();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// The "connect" decorator takes as its only parameter, a function that will select which slice of your    //
// state you want to expose to your component. This function is logically called a "selector" and          //
// receives 2 parameters: the state of your store and the current props of your component.                 //
// The props of the component are provided to handle common case like extracting a slice of your           //
// state depending on a prop value (Ex: state.items[props.someID]).                                        //
//                                                                                                         //
// NOTE: Can NOT use propTypes checking with decorator. Use either of the solutions located at end of file //
//                                                                                                         //
// @connect((state /*, props*/) => {                                                                       //
//     // This is our select function that will extract from the state the data slice we want to expose    //
//     // through props to our component.                                                                  //
//     return {                                                                                            //
//       reduxState: state,                                                                                //
//       projects: state.projects                                                                          //
//     }                                                                                                   //
// })                                                                                                      //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default class App extends Component {
	getChildContext() { 
	  return {
	    muiTheme: ThemeManager.getCurrentTheme()
	  };
	}
	
	render() {
		const { reduxState, projects, skills, dispatch } = this.props;

		/*Make all action creators available to components via props 
		bind to redux dipatch function http://rackt.github.io/redux/docs/api/bindActionCreators.html*/
		const actions = bindActionCreators(actionCreators, dispatch);


		return (
			<div>
				<div className='row'>
					<Header />
				</div>
				<div className='projects row'>
					<ProjectSection projects={projects} actions={actions} />
				</div>
				<div className='row'>
					<div className='col-xs-12'>
						<SkillsSection skills={skills} actions={actions} />
					</div>
				</div>
				<EducationSection />
				<pre>
				  redux state = { JSON.stringify(reduxState, null, 2) }
				</pre>
			</div>
		);
	}
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};

App.propTypes = {
	reduxState: PropTypes.object.isRequired,
	projects: PropTypes.array.isRequired,
	skills: PropTypes.array.isRequired
}

///////////////////////////////////////////////////
// Named function expression approach to connect //
// prop type checking ALLOWED                    //
//                                               //
// function select(state) {                      //
//   return {                                    //
//     reduxState: state,                        //
//     projects: state.projects                  //
//   };                                          //
// }                                             //
//                                               //
// export default connect(select)(App);          //
///////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
// More concise anonymous arrow function approach to connect.  //
// prop type checking ALLOWED                                  //
/////////////////////////////////////////////////////////////////
export default connect(state => ({
  reduxState: state,
  projects: state.projects,
  skills: state.skills
}))(App);