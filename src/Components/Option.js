import React from 'react'
import './Option.css';
import { NavLink} from 'react-router-dom';

export default function Option(props) {

    return (
        <NavLink className='Option' to={props.path}>
            <div className='imglogo'><img src={props.image}></img></div>
            <div>{props.type}</div>
        </NavLink>


    )
}
