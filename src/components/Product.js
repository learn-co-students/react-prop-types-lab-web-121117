import React from 'react';
import PropTypes from 'prop-types'

class Product extends React.Component {
  render(){
    return (
      <div id="product">
        <h5>{this.props.name}</h5>
        <h6>{this.props.producer}</h6>
        <h6>{this.props.hasWatermark}</h6>
        <h6>{this.props.color}</h6>
        <h6>{this.props.weight}</h6>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false,
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.oneOf([...Array(300).keys()].slice(80)).isRequired
}

export default Product
