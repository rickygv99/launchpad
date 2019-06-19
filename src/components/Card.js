import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  getCardStyle() {
    let cardStyle = {
      position: "relative",
      textAlign: "center",
      maxWidth: "300px",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
      backgroundColor: "#FFFFFF",
      borderWidth: 0,
      paddingLeft: 14,
      paddingRight: 14,
      paddingTop: 14,
      paddingBottom: 14,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 5,
      marginBottom: 5,
      fontSize: 16
    };

    return cardStyle;
  }

  render() {
    return (
      <div style={this.getCardStyle()}>
        {this.props.children}
      </div>
    );
  }
}

export default Card;
