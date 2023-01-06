import React from 'react'
import './Option.css';
import { useContext } from 'react';
import { myContext } from './Home';

export default function Option1() {
    const [toggle,setToggle] = useContext(myContext);
    let Border = {
        border: toggle? '2px solid grey': ''
      }
    
      let borderradius = {
        borderRadius: toggle? 10: 0

      }
    return (
        <div  style={{ ...Border, ...borderradius}}  className='Option' onClick={()=>{
            setToggle(true)
          }}>
            <div className='imglogo'><img src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"></img></div>
            <div>Delivery</div>
        </div>
    )
}
