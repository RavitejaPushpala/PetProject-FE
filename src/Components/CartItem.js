import React from 'react'
import './Cart.css';
const CartItem = (props) => {
    console.log(props.product.price);

    return (

        <div className='CartItem'>
            <img className='CartImage' src={props.product.image}></img>
            <div className='CartDescription'>
                <h3>{props.product.name}</h3>
                <div>{props.product.Rating}</div>
                <div>{props.product.inCartQuantity}</div>
                <div>Price : <strong>$ {props.product.inCartQuantity*props.product.price}</strong></div>
            </div>

        </div>

    )
}
export default CartItem