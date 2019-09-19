import React from 'react';
import PropTypes from 'prop-types';

// name: a string — required
// producer: a string — optional
// hasWatermark: a boolean — optional, defaults to false
// color: a string — required, can only be 'white', 'eggshell-white' or 'salmon'
// weight: a number — required, ranges between 80 and 300


export default class Product extends React.Component {

  render() {
    return (
      <div className="product">
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.producer}</li>
          <li>{this.props.hasWatermark ? 'Has Watermark' : 'No Watermark'}</li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
        </ul>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false,
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.oneOf(Array.from(Array(301).keys()).slice(80)).isRequired
  // scoops: PropTypes.arrayOf(PropTypes.string).isRequired,
  // orderInfo: PropTypes.shape({
  //   customerName: PropTypes.string.isRequired,
  //   orderedAt: PropTypes.number.isRequired // We're using UNIX timestamps here
  // }).isRequired
};
