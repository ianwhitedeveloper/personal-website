import React, { Component, PropTypes } from 'react';

export default class TextInput extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      text: ''
    };
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
    this.props.filterSkills(this.state.text);
  }

  render() {
    const { filterSkills } = this.props;

    return (
      <input 
        type="text"
        placeholder={this.props.placeholder}
        autoFocus="true"
        value={this.state.text}
        onChange={::this.handleChange} />
    );
  }
}

TextInput.propTypes = {
  filterSkills: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string
};
