import React from 'react'
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import CartItem from './CartItem';
import CartLength from '../recoils/CartLength';
import '../Styles/Cart.css';
import CartState from '../recoils/CartState';
import CuisineStats from '../recoils/CuisineStats';
import { notification } from 'antd';

const Cart = () => {

  const [showCart, setshowCart] = useState(false);
  const length = useRecoilValue(CartLength);
  const itemsInCart = useRecoilValue(CartState);
  const [cart, setCart] = useRecoilState(CartState);
  const [cuisine, setCuisine] = useRecoilState(CuisineStats);

  const toggleState = () => {
    setshowCart(!showCart);
  }

  const placeOrder = () => {
    let newCuisine = {};

    itemsInCart.map((product) => {

      let type = product.type;
      if (newCuisine.hasOwnProperty(type)) {
        newCuisine[type] += product.inCartQuantity;
      }
      else {
        newCuisine[type] = product.inCartQuantity;
      }
    })
    for (const key in cuisine) {
      if (newCuisine[key]) {
        newCuisine[key] += cuisine[key];
      }
      else {
        newCuisine[key] = cuisine[key];
      }

    }
    setCuisine(newCuisine);
    localStorage.setItem('cuisine' + localStorage.getItem('token'), JSON.stringify(newCuisine));
    setCart([]);
    localStorage.setItem('cart' + localStorage.getItem('token'), JSON.stringify([]));
    openNotification()
  }

  const openNotification = () => {
    notification.open({
      message: 'Order Placed Successfully',
      description:
        '',
    });
  };

  return (
    <div style={showCart ? {} : {}} className='CartItems'>
      <button className='cart' onClick={toggleState}>Cart ({length})</button>
      {showCart && length > 0 && (
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

export default Cart