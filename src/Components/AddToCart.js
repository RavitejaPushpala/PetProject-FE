import React from 'react'
import CartState from '../recoils/CartState';
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import './Cart.css';

const update = (items, idx, item) => {
    if (item.inCartQuantity === 0) {
        return [...items.slice(0, idx), ...items.slice(idx + 1)]
    } else {
        return [...items.slice(0, idx), item, ...items.slice(idx + 1)]
    }
}

function AddToCart(props) {
    console.log(props);
    const [itemsInCart, setItemsInCart] = useRecoilState(CartState);
    const [state, setstate] = useState(true);
    const idx = itemsInCart.findIndex((item) => (item.name === props.productData.name) && (item.RestaurantName === props.RestaurantData.name))
    const itemInCart = idx >= 0 ? itemsInCart[idx] : undefined
    let newCart = undefined;
    const incrementQuantity = () => {
        if (itemInCart) {
            if (itemInCart.inCartQuantity == props.productData.quantity) {
                setstate(false);

            }
            else {
                newCart = [...itemsInCart.slice(0, idx), { ...itemInCart, inCartQuantity: itemInCart.inCartQuantity + 1 }, ...itemsInCart.slice(idx + 1)]
                setItemsInCart(newCart)
            }

        } else {
            newCart = [...itemsInCart,
            {
                id: props.productData.id,
                name: props.productData.name,
                image: props.productData.image,
                inCartQuantity: 1,
                price: props.productData.Price,
                RestaurantName: props.RestaurantData.name,
            }]
            setItemsInCart(newCart)
        }

    }
    const decrementQuantity = () => {
        if (itemInCart.inCartQuantity == props.productData.quantity) setstate(true);
        newCart = update(itemsInCart, idx, {
            ...itemInCart,
            inCartQuantity: itemInCart.inCartQuantity - 1
        })
        setItemsInCart(newCart)
    }
    console.log(itemsInCart);
    if (itemInCart) {
        return (
            <div className='AddToCart'>
                <button onClick={decrementQuantity}> - </button>
                <span >{itemInCart.inCartQuantity}</span>
                {state && (<button onClick={incrementQuantity}> + </button>)}
            </div>
        )
    } else {
        return (
            <div className='AddToCart'>
                <button onClick={incrementQuantity}>Add To Cart</button>

            </div>
        )
    }
}
export default AddToCart
