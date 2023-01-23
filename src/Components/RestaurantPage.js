import React from 'react'
import '../Styles/RestaurantPage.css';
import RestaurantCard from './RestaurantCard';
import Menu from './Menu';
import useRestaurantPageData from '../Hooks/useRestaurantPageData';
import { useParams } from 'react-router';
import RestaurantPageDescription from './RestaurantPageDescription';

const RestaurantPage = () => {
  const type = useParams().type;
  const id = useParams().id;
  const { isLoading, data, isError, error } = useRestaurantPageData(type, id);

  if (isLoading) {
    return <h2>Loading ...</h2>
  }
  if (isError) {
    return <h2>{error.message}</h2>
  }
  let menu = data?.data.Menu;

  return (
    <>
      <div className='RestaurantPage'>
        <RestaurantCard FoodData={data.data} />
      </div>
      {(type === 'diningOut') && <h1 className='menuh1'>Restaurant Details</h1>}
      {(type === 'diningOut') && <RestaurantPageDescription FoodData={data.data} />}
      <h1 className='menuh1'>MENU</h1>
      <div className='Menues'>
        {
          menu.map((FoodData) => {
            return <Menu RestaurantData={data.data} FoodData={FoodData} />
          })
        }
      </div>
    </>
  )
}
export default RestaurantPage