import React, { Component, PropTypes } from 'react';
import mui from 'material-ui';

let RaisedButton = mui.RaisedButton;
let TextField = mui.TextField;

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
    const { filterSkills, placeholder } = this.props;

    return (
      <div>
        <TextField
          floatingLabelText={placeholder}
          value={this.state.text}
          onChange={::this.handleChange} />
        
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
