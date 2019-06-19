import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Colors from '../utils/Colors';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hovering: false,
      focused: false
    };
  }

  getInputStyle() {
    const { hovering, focused } = this.state;

    let inputStyle = {
      borderStyle: "solid",
      borderRadius: 0,
      borderBottomWidth: 1,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      paddingLeft: 14,
      paddingRight: 14,
      paddingTop: 5,
      paddingBottom: 5,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 5,
      marginBottom: 5,
      fontSize: 16,
      color: "#000000",
      backgroundColor: "#FFFFFF",
      outline: "none"
    };

    if (hovering) {
      inputStyle.borderBottomWidth = 2;
    }

    if (focused) {
      inputStyle.borderBottomWidth = 2;
      inputStyle.borderColor = Colors.primary;
    }

    return inputStyle;
  }

  getType() {
    const { type } = this.props;

    if (type === "text") {
      return "text";
    } else if (type === "password") {
      return "password";
    } else if (type === "email") {
      return "email";
    }
    return "text";
  }

  getPlaceholder() {
    const { type, placeholder } = this.props;

    if (placeholder !== "") {
      return placeholder;
    }

    if (type === "text") {
      return "Enter text here...";
    } else if (type === "password") {
      return "Enter password here...";
    } else if (type === "email") {
      return "Enter email here...";
    }
    return "Enter text here...";
  }

  onMouseEnter() {
    this.setState({ hovering: true });
  }

  onMouseLeave() {
    this.setState({ hovering: false });
  }

  onFocus() {
    this.setState({ focused: true });
  }

  onBlur() {
    this.setState({ focused: false });
  }

  render() {
    const { type, placeholder, onChange, disabled } = this.props;

    return (
      <input
        type={this.getType()}
        placeholder={this.getPlaceholder()}
        onChange={onChange}
        onMouseEnter={() => this.onMouseEnter()}
        onMouseLeave={() => this.onMouseLeave()}
        onFocus={() => this.onFocus()}
        onBlur={() => this.onBlur()}
        disabled={disabled}
        style={this.getInputStyle()}
      />
    );
  }
}

Input.defaultProps = {
  disabled: false,
  placeholder: "",
  type: "text"
};

export default Input;
