import React from 'react'
import Restaurant from './Restaurant'
import '../Styles/Delivery.css';

import useRestaurantsData from '../Hooks/useRestaurantsData';
import { useRecoilValue } from 'recoil';
import UserDetails from '../recoils/CuisineStats';
import { useContext } from 'react';
import { myContext } from '../App';
export default function Delivery() {
    const [userName, setUserName] = useContext(myContext);
    const { isLoading, data, isError, error } = useRestaurantsData();
    const user = useRecoilValue(UserDetails);
    if (isLoading) {
        return <h2>Loading ...</h2>
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <>
            <h1 className='h1Delivery'>Delivery Restaurants in Hyderabad City</h1>
            <div className='Delivery'>
                {
                    data?.data.map((pData) => {
                        return <Restaurant key={pData.id} productData={pData} />
                    })
                }
                {
                    data?.data.map((pData) => {
                        return <Restaurant key={pData.id} productData={pData} />
                    })
                }
            </div>
        </>
    )
}
