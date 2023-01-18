import React from 'react'
import { NavLink } from 'react-router-dom';
import '../Styles/Header.css';


export default function Header() {
    return (
        <div className='Navbar'>
            <NavLink className='NavLink NavLink1' to='/'><img className='logo' src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' ></img></NavLink>
        </div>
    )
}
