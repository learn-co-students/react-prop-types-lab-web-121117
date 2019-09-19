// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <h1>{this.props.name}</h1>
        <h3>Producer: {this.props.producer}</h3>
        <h3>Watermark: {this.props.hasWatermark ? "Yes" : "No"}</h3>
        <h3>Color: {this.props.color}</h3>
        <h3>Weight: {this.props.weight}</h3>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(["white", "eggshell-white", "salmon"]).isRequired,
  weight: function weightCheck(props, propName, componentName) {
    if (props[propName]) {
      let weight = props[propName];
      if (typeof weight === "number") {
        return weight > 79 && weight < 301 ? null : new Error("Invalid prop - weight is not in range");
      } else {
        return new Error("Invalid prop - weight is not a number");
      }
    } else {
      return new Error("Invalid prop - weight is required")
    }
  },
}


// function(props, weight, Product) {
//   if (!/matchme/.test(props[weight] > 79 && props[weight] < 301)) {
//     return new Error(
//       'Invalid prop `' + weight + '` supplied to' +
//       ' `' + Product + '`. Validation failed.'
//     );
//   }
// }

export default Product;
