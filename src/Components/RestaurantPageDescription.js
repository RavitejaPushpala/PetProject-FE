import {Descriptions } from 'antd';
import './RestaurantPageDescription.css';

const RestaurantPageDescription = (props) => {
  
  return (
    <div className='RestaurantPageDescription'>
      <Descriptions >
        <Descriptions.Item  label={<strong>Location</strong>}>{props.FoodData.Location}</Descriptions.Item>
        <Descriptions.Item label={<strong>Opens at</strong>}>{props.FoodData.OpensAt}</Descriptions.Item>
        <Descriptions.Item label={<strong>Dining Rating</strong>}>{props.FoodData.DiningRating}</Descriptions.Item>
        <Descriptions.Item label={<strong>Delivery Rating</strong>}>{props.FoodData.Rating}</Descriptions.Item>
        <Descriptions.Item label={<strong>Popular Dish</strong>}>{props.FoodData.PopularDish}</Descriptions.Item>
        <Descriptions.Item label={<strong>Call</strong>}>{props.FoodData.Call}</Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default RestaurantPageDescription;

