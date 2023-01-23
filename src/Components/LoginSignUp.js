import React from 'react'
import Header from './Header';
import { Link, Outlet } from 'react-router-dom';

const LoginSignUp = () => {

  return (
    <div>
      <Header />
      <div className='signUpLogin'>
        <div className='loginSignupBtns'>
          <Link to="login"><button >Login</button></Link>
          <Link to="signup"><button >SignUp</button></Link>
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default LoginSignUp
