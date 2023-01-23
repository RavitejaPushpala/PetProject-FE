import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

const ProtectedRoute1 = (props) => {

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
export default ProtectedRoute1