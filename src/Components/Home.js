import React from 'react'
import { Outlet } from 'react-router';
import '../Styles/Home.css';
import DeliveryDiningSections from './DeliveryDiningSections';
import { useRecoilValue } from 'recoil';
import UserDetails from '../recoils/UserDetails';

const Home = () => {
    const userName = useRecoilValue(UserDetails);
    return (
        <div>
            <DeliveryDiningSections />
            <Outlet />
        </div>
    );
}

export default Home