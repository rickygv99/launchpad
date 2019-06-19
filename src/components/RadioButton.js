import React, { Component } from 'react';
import Colors from '../utils/Colors';

class RadioButton extends Component {
  constructor (props) {
    super(props);
  }

  getRadioButtonStyle() {
    let radioButtonStyle = {
      backgroundColor: "#FFFFFF",
      color: Colors.primary,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 5,
      marginBottom: 5,
      outline: "none",
      cursor: "pointer"
    };

    return radioButtonStyle;
  }

  render() {
    const { name, label, onChange, disabled } = this.props;

    return (
      <label><input
        type="radio"
        name={name}
        onChange={onChange}
        disabled={disabled}
        style={this.getRadioButtonStyle()}
      />{label}</label>
    );
  }
}

RadioButton.defaultProps = {
  disabled: false
};

export default RadioButton;
