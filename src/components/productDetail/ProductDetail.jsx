import React from 'react'

const ProductDetail = (props) => {
    const{index}=props.match.params;
    console.log("state in",index)
  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail