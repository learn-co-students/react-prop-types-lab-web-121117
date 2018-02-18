// Code Product Component Here
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export default class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark ? "Has watermark" : "No watermark"}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(["white", "eggshell-white", "salmon"]).isRequired,
  weight: function verifyWeight(props, propName, componentName) {
    if (props[propName]) {
      let value = props[propName];
      if (typeof value === "number") {
        return value > 80 && value < 300 ? null : new Error("not in range");
      } else {
        return new Error("not a number");
      }
    } else {
      return new Error("required");
    }
  }
};
