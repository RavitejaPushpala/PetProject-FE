import React from 'react'
import Option1 from './Option1';
import Option2 from './Option2';
import './Options.css';


export default function Options() {
  const clicked=()=>{
    console.log("clicked");
  }
  return (
    <div className='Options' onClick={clicked}>
        <Option1 />
        <Option2 />
    </div>
  )
}
