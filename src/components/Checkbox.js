import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Colors from '../utils/Colors';

class Checkbox extends Component {
  constructor(props) {
    super(props);
  }

  getCheckboxStyle() {
    let checkboxStyle = {
      borderStyle: "solid",
      borderRadius: 0,
      borderWidth: 1,
      backgroundColor: "#FFFFFF",
      color: Colors.primary,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 5,
      marginBottom: 5,
      outline: "none",
      cursor: "pointer"
    };

    return checkboxStyle;
  }

  render() {
    const { onChange, disabled } = this.props;

    return (
      <input
        type="checkbox"
        onChange={onChange}
        disabled={disabled}
        style={this.getCheckboxStyle()}
      />
    );
  }
}

Checkbox.defaultProps = {
  disabled: false
};

export default Checkbox;
