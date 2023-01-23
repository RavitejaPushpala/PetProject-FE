import React from 'react'
import '../Styles/Option.css';
import { NavLink } from 'react-router-dom';

const Section = (props) => {

    return (
        <NavLink className='Option' to={props.path}>
            <div className='imglogo'><img src={props.image}></img></div>
            <div>{props.type}</div>
        </NavLink>
    )
}

export default Section