import React from 'react'
import CartState from '../recoils/CartState';
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import '../Styles/Cart.css';

const update = (items, idx, item) => {
    if (item.inCartQuantity === 0) {
        return [...items.slice(0, idx), ...items.slice(idx + 1)]
    } else {
        return [...items.slice(0, idx), item, ...items.slice(idx + 1)]
    }
}

const AddToCart = (props) => {
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
                localStorage.setItem('cart' + localStorage.getItem('token'), JSON.stringify(newCart));
            }
        }
        else {
            newCart = [...itemsInCart,
            {
                id: props.productData.id,
                name: props.productData.name,
                image: props.productData.image,
                inCartQuantity: 1,
                price: props.productData.Price,
                RestaurantName: props.RestaurantData.name,
                type: props.productData.type,
            }]
            setItemsInCart(newCart)
            localStorage.setItem('cart' + localStorage.getItem('token'), JSON.stringify(newCart));
        }

    }


    const decrementQuantity = () => {
        if (itemInCart.inCartQuantity == props.productData.quantity) setstate(true);
        newCart = update(itemsInCart, idx, {
            ...itemInCart,
            inCartQuantity: itemInCart.inCartQuantity - 1
        })
        setItemsInCart(newCart)
        localStorage.setItem('cart' + localStorage.getItem('token'), JSON.stringify(newCart));
    }

    return (
        <div className='AddToCart'>
            {itemInCart && (
                <>
                    <button onClick={decrementQuantity}> - </button>
                    <span >{itemInCart.inCartQuantity}</span>
                    {state && (<button onClick={incrementQuantity}> + </button>)}
                </>
            )}
            {!itemInCart && (
                <>
                    <button onClick={incrementQuantity}>Add To Cart</button>
                </>
            )}
        </div>
    )
}
export default AddToCart
