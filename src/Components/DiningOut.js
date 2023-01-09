import React from 'react'
import Restaurant from './Restaurant'
import './Delivery.css';
import useDiningData from '../Hooks/useDiningData';

export default function DiningOut() {
    const { isLoading, data, isError, error } = useDiningData();
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
    console.log(ar);
    return (
        <>
            <h1 className='h1Delivery'>Best Dining Restaurants near you in Hyderabad City</h1>
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

