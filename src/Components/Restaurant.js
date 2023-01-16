import React from 'react'
import { Link } from 'react-router-dom'
import Description from './Description'
import './Restaurant.css';


function Restaurant(props) {
    return (

        <Link to={'' + props.productData.id} className='Restaurant'>
            <div >
                <div >
                    <img className='Image' src={props.productData.image} />
                </div>
                <Description productData={props.productData} />
            </div>
        </Link>

    )
}

export default Restaurant