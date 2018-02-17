import React from 'react'
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return (
      <div>
        <h2>Name: {this.props.name} </h2>
        <ul>
          <li>Producer: {this.props.producer} </li>
          <li>Watermark: {this.props.hasWatermark} </li>
          <li>Color: {this.props.color} </li>
          <li>Weight: {this.props.weight} </li>
        </ul>
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
  hasWatermark: PropTypes.bool.isRequired,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.oneOf(Array.from(Array(301).keys()).slice(80)).isRequired
}
