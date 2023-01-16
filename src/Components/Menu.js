import React from 'react'
import AddToCart from './AddToCart';
import './Menu.css';

export default function Menu(props) {
  return (
    <div className='Menu'>
      <img src={props.FoodData.image}></img>
      <div className='MenuChild'>
        <h3 className='ItemDescription'>{props.FoodData.name}</h3>
        <button className='btn ItemDescription Rating'>{props.FoodData.Rating}★</button>
        <p1 className='ItemDescription'>₹{props.FoodData.Price}</p1>
        <AddToCart RestaurantData={props.RestaurantData} productData={props.FoodData} className=''></AddToCart>
      </div>
    </div>
  )
}
