// Code Product Component Here

import React from 'react'
// import ReactDOM from 'react-dom' don't need reactDOM here
import PropTypes from 'prop-types';

class Product extends React.Component {
  render(){
    return(
      <div>
        <h4>{this.props.name}</h4>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark ? 'Has Watermark' : 'No Watermark'}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false
}

var weight_range = [];
for (var i = 80; i < 300; i++) {
  weight_range.push(i);
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.oneOf(weight_range).isRequired
}

export default Product;
