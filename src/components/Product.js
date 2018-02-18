import React from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component{
  render(){
    return(
      <div>
        <h1>{this.props.name}</h1>
        <h3>{this.props.producer}</h3>
        <h3>{this.props.hasWatermark}</h3>
        <h3>{this.props.color}</h3>
        <h3>{this.props.weight}</h3>
      </div>
    )
  }
}

// name: a string — required
// producer: a string — optional
// hasWatermark: a boolean — optional, defaults to false
// color: a string — required, can only be 'white', 'eggshell-white' or 'salmon'
// weight: a number — required, ranges between 80 and 300

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.oneOf(Array.from(Array(301).keys()).slice(80)).isRequired
}

export default Product
