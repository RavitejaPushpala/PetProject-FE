import React from 'react'
import { useEffect } from 'react';
import '../Styles/profile.css';
import { useRecoilState } from 'recoil';
import UserDetails from '../recoils/UserDetails';
import { auth } from '../Firebase';

const Profile = () => {
  const [userName, setUserName] = useRecoilState(UserDetails);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUserName(user.displayName)
    })
  }, [])

  return (
    <div>
      <div className='profile'>
        <h1>Username : {userName}</h1>
        <h1>Email : {localStorage.getItem('token')}</h1></div>
    </div>
  )
}

export default Profile