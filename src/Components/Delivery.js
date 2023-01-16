import React from 'react'
import Restaurant from './Restaurant'
import './Delivery.css';
import useRestaurantsData from '../Hooks/useRestaurantsData';
import { useRecoilValue } from 'recoil';
import UserDetails from '../recoils/UserDetails';

export default function Delivery() {
    const { isLoading, data, isError, error } = useRestaurantsData();
    const user = useRecoilValue(UserDetails);
    console.log(user);
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
