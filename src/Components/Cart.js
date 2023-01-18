import React from 'react'
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import CartItem from './CartItem';
import CartLength from '../recoils/CartLength';
import '../Styles/Cart.css';
import CartState from '../recoils/CartState';
import CuisineStats from '../recoils/CuisineStats';

export default function Cart() {

  const [state, setstate] = useState(false);
  const length = useRecoilValue(CartLength);
  const itemsInCart = useRecoilValue(CartState);
  const [cart, setCart] = useRecoilState(CartState);
  const [cuisine, setCuisine] = useRecoilState(CuisineStats);
  const toggleState = () => {
    setstate(!state);
  }
  const placeOrder = () => {
    let newCuisine = [0, 0, 0, 0];
    itemsInCart.map((product) => {
      if (product.type === 'Indian') {
        newCuisine[0] = newCuisine[0] + product.inCartQuantity;
      }
      else if (product.type === 'Chinese') {
        newCuisine[1] = newCuisine[1] + product.inCartQuantity;
      }
      else if (product.type === 'Mexican') {
        newCuisine[2] = newCuisine[2] + product.inCartQuantity;
      }
      else {
        newCuisine[3] = newCuisine[3] + product.inCartQuantity;
      }

    })
    for (let i = 0; i < cuisine.length; i++) {
      newCuisine[i] = newCuisine[i] + cuisine[i];
    }
    setCuisine(newCuisine);
    localStorage.setItem('cuisine' + localStorage.getItem('token'), JSON.stringify(newCuisine));
    setCart([]);
    localStorage.setItem(localStorage.getItem('token'), JSON.stringify([]));
    alert("Order Placed Successfully");
  }
  return (
    <div style={state ? {} : {}} className='CartItems'>
      <button className='cart' onClick={toggleState}>Cart ({length})</button>
      {state && length > 0 && (
        <div className='CartList'>
          {itemsInCart.map((product) => {
            return <CartItem product={product} />
          })}
          <button onClick={placeOrder} className='placeOrder'>Place Order</button>
        </div>
      )}

    </div>


  )
}
