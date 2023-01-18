import React from 'react';
import { Card } from 'antd';
import '../Styles/RestaurantPage.css';

const { Meta } = Card;

const RestaurantCard = (props) => (
    <div className='RestaurantCard'>
        <Card className='card'
            style={{ width: 600 }}
            cover={<img className='restImage' alt="example" src={props.FoodData.image} />}
        >

        </Card>
        <div className='Description Descriptionn'>
            <div className='Description1'>
                <h3>{props.FoodData.name}</h3>
                <span className="Rating">{props.FoodData.Rating}★</span>
            </div>
            <div className='Description2'>{props.FoodData.description}</div>

        </div>
    </div>

);

export default RestaurantCard;