import React from 'react'
import '../Styles/Options.css';
import Section from './Section';

const DeliveryDiningSections = () => {

  return (
    <div className='Options' >
      <Section path='delivery' image="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png" type="Delivery" />
      <Section path='diningOut' image="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png" type="Dining Out" />
    </div>
  )
}

export default DeliveryDiningSections;