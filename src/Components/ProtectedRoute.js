import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { useRecoilState, useRecoilValue } from 'recoil';
import { auth } from '../firebase';
import UserDetails from '../recoils/UserDetails';

export default function ProtectedRoute(props) {
    const {Component}=props;
    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('token')===null){
            navigate('/');
        }
    });
  return (
    <div>
        <Component/>
    </div>
  )
}
