import React from 'react'
import '../Styles/Cart.css';


const CartItem = (props) => {

    return (

        <div className='CartItem'>
            <div className='Cartimg'><img className='CartImage' src={props.product.image}></img></div>

            <div className='CartDescription'>
                <h3>{props.product.name}</h3>
                <div>{props.product.Rating}</div>
                <div>{props.product.inCartQuantity}</div>
                <div>Price : <strong>$ {props.product.inCartQuantity * props.product.price}</strong></div>
            </div>

        </div>

    )
}
export default CartItem