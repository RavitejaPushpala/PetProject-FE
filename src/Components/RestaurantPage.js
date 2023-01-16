import React from 'react'
import './RestaurantPage.css';
import RestaurantCard from './RestaurantCard';
import Menu from './Menu';
import Navbar from './Navbar';
import useRestaurantPageData from '../Hooks/useRestaurantPageData';
import { useParams } from 'react-router';
import RestaurantPageDescription from './RestaurantPageDescription';


export default function RestaurantPage() {
  const type = useParams().type;
  const id = useParams().id;
  const { isLoading, data, isError, error } = useRestaurantPageData(type, id);
  if (isLoading) {
    return <h2>Loading ...</h2>
  }
  if (isError) {
    return <h2>{error.message}</h2>
  }
  console.log(data.data.Menu);
  return (
    <>
      <Navbar />
      <div className='RestaurantPage'>
        <RestaurantCard FoodData={data.data} />

      </div>
      
      {(type==='diningOut') && <h1 className='menuh1'>Restaurant Details</h1>}
      {(type==='diningOut') && <RestaurantPageDescription FoodData={data.data}/>}
      <h1 className='menuh1'>MENU</h1>
      <div className='Menues'>
        {
          data?.data.Menu.map((FoodData) => {
            return <Menu RestaurantData={data.data} FoodData={FoodData} />
          })
        }
      </div>


    </>



  )
}
