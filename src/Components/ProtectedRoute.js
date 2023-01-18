import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
export default function ProtectedRoute(props) {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      navigate('/');
    }
  });
  return (
    <div>
      <Component />
    </div>
  )
}
