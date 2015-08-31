import React, { Component, PropTypes } from 'react';

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
      </div>
    );
  }
}

TextInput.propTypes = {
  filterSkills: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string
};
