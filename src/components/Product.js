// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';



export default class Product extends React.Component{
  static defaultProps = {
    hasWatermark: false
  };

  static propTypes = {
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    hasWatermark: PropTypes.bool,
    color: PropTypes.oneOf(["white", "eggshell-white", "salmon"]).isRequired,
    weight(props, propName, component) {
      if (!(propName in props)) {
        return new Error("The `weight` prop validator does not validate the value as being required.")
      }
      if (!(Number.isInteger(props[propName]))) {
        return new Error("Weight needs to be a number.")
      }
      if (props[propName] > 300 || props[propName] < 80)
        return new Error("Needs to be a  number between 80 and 300.")
    }
  }


  render(){
    return(
      <ul>
        <li>{this.props.name}</li>
        <li>{this.props.producer}</li>
        <li>{this.props.hasWatermark ? "yes" : "no"  }</li>
        <li>{this.props.color}</li>
        <li>{this.props.weight}</li>
      </ul>
    )
  }
}
