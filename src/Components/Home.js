import React from 'react'
import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Options from './Options'
import './Home.css';

export default function Home() {
    return (
        <div>
            <Navbar />
            <Options />
            {/* <h1 className='slogan'>'Bringing food to your door'</h1> */}
            <Outlet />
        </div>);
}

