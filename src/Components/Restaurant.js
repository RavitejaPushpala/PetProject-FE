import React from 'react'
import { Link } from 'react-router-dom'
import Description from './Description'
import Image from './Image'
import './Restaurant.css';

function Restaurant(props) {
    return (
        <Link to={'/Restaurant'} className='Restaurant'>
            <div >
                <Image imge={props.productData.image} />
                <Description productData={props.productData} />
            </div>
        </Link>

    )
}

export default Restaurant