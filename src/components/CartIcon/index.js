import React from 'react'
import Style from "./CartIcon.module.css"
const CartIcon = ({}) => {
  return (
    <div className={Style.cartIconConatiner}>
        <div className={Style.cartImgContainer}>
            <img src="/Images/fluent_cart-16-regular.svg" alt="" />
        </div>
        {
          <span className={Style.cartText}> Cart</span>
        }
    </div>
  )
}

export default CartIcon