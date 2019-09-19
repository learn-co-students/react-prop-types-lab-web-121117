import React from 'react';
import PropTypes from 'prop-types'

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <h3>Name: {this.props.name}</h3>
        <h4>Producer: {this.props.producer}</h4>
        <h4>Watermark? {this.props.hasWatermark ? "Yes" : "No"}</h4>
        <h4>Color: {this.props.color}</h4>
        <h4>Weight: {this.props.weight}</h4>
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
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
    if (props[propName] === undefined) {
      return new Error('The `weight` prop is required.');
    }
    if (isNaN(props[propName])) {
      return new Error ('Invalid type')
    } 
    if(props[propName] < 80 || props[propName] > 300) {
       return new Error('Invalid');
    }
 }
}

export default Product;