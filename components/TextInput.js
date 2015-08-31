import React, { Component, PropTypes } from 'react';
import mui from 'material-ui';

let RaisedButton = mui.RaisedButton;

const ThemeManager = new mui.Styles.ThemeManager();

export default class TextInput extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      text: ''
    };
  }

  handleChange(e) {
    let value = e.target.value.trim();
    this.setState({ text: value });
    this.props.filterSkills(value);
  }

  clearInput(e) {
    this.setState({ text: '' });
    this.props.filterSkills('');
  }

  // childContextTypes: {
  //   muiTheme: React.PropTypes.object
  // }

  // getChildContext() {
  //   return {
  //     muiTheme: ThemeManager.getCurrentTheme()
  //   };
  // }

  render() {
    const { filterSkills } = this.props;

    return (
      <div>
        <input 
          type="text"
          placeholder={this.props.placeholder}
          autoFocus="true"
          value={this.state.text}
          onChange={::this.handleChange}
          ref='input' />
        <RaisedButton onClick={::this.clearInput} label="Primary" primary={true} label="×" />
      </div>
    );
  }
}

TextInput.propTypes = {
  filterSkills: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string
};
