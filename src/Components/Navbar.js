import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Cart from './Cart';
import '../Styles/Navbar.css';
import { auth } from '../Firebase';

const Navbar = () => {
    const navigate = useNavigate();
    const logout = () => {
        auth.signOut().then(() => {
            localStorage.removeItem('token');
            navigate('/')
        })

    }

    return (
        <>
            {localStorage.getItem('token') && (
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
            )}
        </>

    )
}

export default Navbar