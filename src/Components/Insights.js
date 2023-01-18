import '../Styles/Insights.css';

import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useState } from 'react';
import Navbar from './Navbar';
import { useRecoilValue } from 'recoil';
import CuisineStats from '../recoils/CuisineStats';
const Insights = () => {
    const cuisines = useRecoilValue(CuisineStats);
    const [options, setOptions] = useState({
        chart: {
            width: 380,
            type: 'pie',
        },
        labels: ['Indian', 'Chinese', 'Mexican', 'Turkish'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    });
    const [series, setSeries] = useState(cuisines);
    let x = 0;
    for (let i = 0; i < cuisines.length; i++) x += cuisines[i];
    return (
        <>
            <Navbar />
            {x===0 && <h1 className='cuisines'>No orders placed</h1> }
            {   x!==0 &&
                <div>
                <h1 className='cuisines'>Cuisines ordered</h1>
                <div className='chart' id="chart">
                    <ReactApexChart options={options} series={series} type="pie" width={600} />
                </div>
            </div>
            }

        </>

    )

}
export default Insights