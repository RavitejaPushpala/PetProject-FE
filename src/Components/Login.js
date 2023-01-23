import React from 'react'
import { useFormik } from 'formik'
import '../Styles/LoginSignup.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useRecoilState, useRecoilValue } from 'recoil';
import CartState from '../recoils/CartState';
import CuisineStats from '../recoils/CuisineStats';

const Login = () => {
  const [cart, setCart] = useRecoilState(CartState);
  const [cuisine, setCuisine] = useRecoilState(CuisineStats);
  const navigate = useNavigate();

  const initialValues = {
    mail: '',
    pwd: '',
    msg: ''
  };

  const [submitButtonDisabled, setsubmitButtonDisabled] = useState(false);

  const onSubmit = values => {
    setsubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.mail, values.pwd).then((res) => {
      setsubmitButtonDisabled(false);
      localStorage.setItem('token', values.mail);
      setCuisine(JSON.parse(localStorage.getItem('cuisine' + values.mail)));
      setCart(JSON.parse(localStorage.getItem('cart' + values.mail)));
      navigate('/home/delivery');
    }).catch((err) => {
      formik.errors.msg = err.message;
      setsubmitButtonDisabled(false);
    })
  }

  const validate = values => {
    let errors = {};
    if (!values.pwd) {
      errors.pwd = '*Required';
    }
    if (!values.mail) {
      errors.mail = '*Required';
    }
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.mail)) {
      errors.mail = 'invalid email';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });

  return (
    <div className='loginSignup'>
      <form onSubmit={formik.handleSubmit}>
        <div className='formItem'>
          <input placeholder='Your Email' type="email" id="mail" name="mail" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mail} />
          {formik.touched.mail && formik.errors.mail ? <div className='errors'>{formik.errors.mail}</div> : null}
        </div>
        <div className='formItem'>
          <input placeholder='Your Password' type="password" id="pwd" name="pwd" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.pwd} />
          {formik.touched.pwd && formik.errors.pwd ? <div className='errors'>{formik.errors.pwd}</div> : null}
        </div>
        <div >
          {formik.errors.msg ? <div className='errors'>User doesn't exist</div> : null}
          <button disabled={submitButtonDisabled} className='lsbtn'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login