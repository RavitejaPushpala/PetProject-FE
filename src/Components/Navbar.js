import React from 'react'
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import CartState from '../recoils/CartState';
import Cart from './Cart';
import '../Styles/Navbar.css';

export default function Navbar() {
    const cartList = useRecoilValue(CartState);
    const logout = () => {
        localStorage.removeItem('token');
    }
    return (

        <div className='navbar'>
            <div className='image'><img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'></img></div>
            <div className='childNav'>
                <Link className='navbarLinks' to='/home/Delivery'><h3>Home</h3></Link>
                <Link className='navbarLinks' to='/insights'><h3>Insights</h3></Link>
                <Link to='/profile' className='navbarLinks' ><h3>Profile</h3></Link>
                <Cart />
            </div>
            <Link className='navbarLinks logout'><h3 onClick={logout}>Logout</h3></Link>
        </div>


    )
}
