import React from 'react'
import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Options from './Options'
import '../Styles/Home.css';

export default function Home() {
    return (
        <div>
            <Navbar />
            <Options />
            <Outlet />
        </div>);
}

