import React from 'react'
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import UserDetails from '../recoils/UserDetails';
import Cart from './Cart';
import './Navbar.css';

export default function Navbar() {
    const [user, setUser] = useRecoilState(UserDetails);
    const logout = () => {
        localStorage.removeItem('token');
    }
    return (
        <div className='navbarrr'>
            <div className='navbar'>
                <div><img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'></img></div>
                <Link className='navbarLinks' to='/home'><h3>Home</h3></Link>
                <Link className='navbarLinks' to='/insights'><h3>Insights</h3></Link>
                <Link className='navbarLinks' ><h3>Profile</h3></Link>
                <Link className='navbarLinks'><h3 onClick={logout}>Logout</h3></Link>
            </div>
            <Cart />
        </div>
    )
}
