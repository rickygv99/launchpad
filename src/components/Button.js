import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Colors from '../utils/Colors';

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Button",
      hovering: false
    };
  }

  componentDidMount() {
    var text = this.props.children;
    if (text === "") {
      return;
    }

    this.setState({
      text: text
    });
  }

  getButtonStyle() {
    const { theme, outline, pill } = this.props;
    const { hovering } = this.state;

    let buttonStyle = {
      borderStyle: "solid",
      borderRadius: 0,
      borderWidth: 2,
      backgroundColor: "#FFFFFF",
      borderColor: "#FFFFFF",
      color: "#000000",
      paddingLeft: 24,
      paddingRight: 24,
      paddingTop: 14,
      paddingBottom: 14,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 5,
      marginBottom: 5,
      fontSize: 16,
      outline: "none",
      cursor: "pointer"
    };

    let color = Colors.primary;
    if (theme === "primary") {
      color = Colors.primary;
      if (hovering) {
        color = Colors.primaryHover;
      }
      buttonStyle.color = "#FFFFFF";
    } else if (theme === "secondary") {
      color = Colors.secondary;
      if (hovering) {
        color = Colors.secondaryHover;
      }
      buttonStyle.color = "#FFFFFF";
    } else if (theme === "success") {
      color = Colors.success;
      if (hovering) {
        color = Colors.successHover;
      }
      buttonStyle.color = "#FFFFFF";
    } else if (theme === "danger") {
      color = Colors.danger;
      if (hovering) {
        color = Colors.dangerHover;
      }
      buttonStyle.color = "#FFFFFF";
    } else if (theme === "info") {
      color = Colors.info;
      if (hovering) {
        color = Colors.infoHover;
      }
      buttonStyle.color = "#FFFFFF";
    } else if (theme === "warning") {
      color = Colors.warning;
      if (hovering) {
        color = Colors.warningHover;
      }
      buttonStyle.color = "#000000";
    }

    buttonStyle.backgroundColor = color;
    buttonStyle.borderColor = color;
    buttonStyle.outlineColor = color;
    if (outline && !hovering) {
      buttonStyle.backgroundColor = "#FFFFFF";
      buttonStyle.color = color;
    }

    if (pill) {
      buttonStyle.borderRadius = 50;
    }

    return buttonStyle;
  }

  onMouseEnter() {
    this.setState({ hovering: true });
  }

  onMouseLeave() {
    this.setState({ hovering: false });
  }

  render() {
    const { onChange, disabled } = this.props;
    const { text } = this.state;

    return (
      <input
        type="button"
        value={text}
        onChange={onChange}
        onMouseEnter={() => this.onMouseEnter()}
        onMouseLeave={() => this.onMouseLeave()}
        disabled={disabled}
        style={this.getButtonStyle()}
      />
    );
  }
}

Button.defaultProps = {
  disabled: false,
  theme: "primary",
  outline: false,
  pill: false
};

export default Button;
