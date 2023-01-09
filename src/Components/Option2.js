import React from 'react'
import './Option.css';
import { useContext } from 'react';
import { myContext } from './Home';


export default function Option2() {
    const [toggle,setToggle] = useContext(myContext);
    let Border = {
        border: !toggle? '2px solid grey': ''
      }
    
      let borderradius = {
        borderRadius: !toggle? 10: 0

      }
    return (
        <div style={{ ...Border, ...borderradius}} className='Option' onClick={()=>{
            setToggle(false)
          }}>
            <div className='imglogo'><img src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png"></img></div>
            <div>Dining Out</div>
        </div>
    )
}
