// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component{

  render() {
    debugger
    return (
      <div>Poop</div>
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
  weight: function(props, propName, Product) {
    // if ((props.weight < 80 || props.weight > 300) || (typeof props.weight !== 'number')) {
    //   return new Error(
    //     `Beef.`
    //   );
    if(props[propName]){
      let value = props[propName]
      if(typeof value === "number"){
        return (value < 80 || value > 300) ? new Error( `Beef.` ) : null
      } else{
        return new Error( `Fuck.` )
      }
    }
    //  else{
    //   return new Error( `Fuck.` )
    // }
    return new Error( `Fuck.` )
  }
}



export default Product
