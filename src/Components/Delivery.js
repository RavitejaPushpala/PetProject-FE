import React from 'react'
import Restaurant from './Restaurant'
import './Delivery.css';
import useRestaurantsData from '../Hooks/useRestaurantsData';

export default function Delivery() {
    const { isLoading, data, isError, error } = useRestaurantsData();
    if (isLoading) {
        return <h2>Loading ...</h2>
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }
    let ar=data.data;
    ar.sort((a, b) => {
        return a.Rating - b.Rating;
    });
    return (
        <>
            <h1 className='h1Delivery'>Delivery Restaurants in Hyderabad City</h1>
            <div className='Delivery'>
                {
                    ar.map((pData) => {
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
