import '../Styles/Insights.css';
import ReactApexChart from 'react-apexcharts';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import CuisineStats from '../recoils/CuisineStats';

const Insights = () => {
    const cuisines = useRecoilValue(CuisineStats);
    const Default = {
        chart: {
            width: 380,
            type: 'pie',
        },
        labels: Object.keys(cuisines),
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
    };

    const [options, setOptions] = useState(Default);
    const [series, setSeries] = useState(Object.values(cuisines));
    let x = series.length;
    return (
        <>
            {x === 0 && <h1 className='cuisines'>No orders placed</h1>}
            {x !== 0 &&
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