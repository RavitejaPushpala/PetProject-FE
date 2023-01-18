import React from 'react'
import { myContext } from '../App';
import Navbar from './Navbar'
import { useContext } from 'react';
import '../Styles/profile.css';

export default function Profile() {
  const [userName, setUserName] = useContext(myContext);
  return (
    <div>
      <Navbar />
      <div className='profile'>
        <h1>Username : {userName}</h1>
        <h1>Email : {localStorage.getItem('token')}</h1></div>
    </div>
  )
}
