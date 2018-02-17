// Code Product Component Here
import React from "react";
import PropTypes from "prop-types";

let numArr = [];

function createArr() {
  let counter = 80;
  while (counter < 301) {
    numArr.push(counter);
    counter++;
  }
  return numArr;
}
createArr();

class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>Producer: {this.props.producer}</p>
        <p>Watermark?: {this.props.hasWatermark}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
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
  weight: PropTypes.oneOf(numArr).isRequired
};

export default Product;
