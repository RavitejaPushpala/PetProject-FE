import React from 'react'
import Login from './Login'
import Signup from './Signup'
import { useState } from 'react';
import Header from './Header';
export default function LoginSignUp() {
  const [state, setstate] = useState(false);

  return (
    <div>
      <Header />
      <div className='signUpLogin'>
        <div className='loginSignupBtns'>
          <button onClick={() => { setstate(true) }}>Login</button>
          <button onClick={() => { setstate(false) }}>SignUp</button>
        </div>
        {state && <Login />}
        {!state && <Signup />}
      </div>

    </div>
  )
}
