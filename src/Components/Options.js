import React from 'react'
import Option from './Option';

import './Options.css';


export default function Options() {

  return (
    <div className='Options' >
      <Option path='delivery' image="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png" type="Delivery" />
      <Option path='diningOut' image="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png" type="Dining Out" />
    </div>
  )
}
