import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
export default function ProtectedRoute2(props) {
    const { Component } = props;
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            navigate('/home/delivery');
        }
    });
    return (
        <div>
            <Component />
        </div>
    )
}
