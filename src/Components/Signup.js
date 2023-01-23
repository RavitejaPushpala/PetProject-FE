import React from 'react'
import { useFormik } from 'formik'
import '../Styles/LoginSignup.css';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import CartState from '../recoils/CartState';
import CuisineStats from '../recoils/CuisineStats';
import UserDetails from '../recoils/UserDetails';

const Signup = () => {
    const [cart, setCart] = useRecoilState(CartState);
    const [cuisine, setCuisine] = useRecoilState(CuisineStats);
    const [userName, setUserName] = useRecoilState(UserDetails);
    const navigate = useNavigate();

    const initialValues = {
        uname: '',
        pwd: '',
        mail: '',
        pwd2: '',
        msg: ''
    };

    const [submitButtonDisabled, setsubmitButtonDisabled] = useState(false);

    const onSubmit = values => {
        setsubmitButtonDisabled(true);
        createUserWithEmailAndPassword(auth, values.mail, values.pwd).then((res) => {
            localStorage.setItem('token', values.mail);
            localStorage.setItem('cart' + values.mail, JSON.stringify([]));
            localStorage.setItem('cuisine' + values.mail, JSON.stringify({}));
            setCart([]);
            setCuisine({});
            setUserName(values.uname);
            setsubmitButtonDisabled(false);
            const user = res.user;
            updateProfile(user, {
                displayName: values.uname,
            }
            );
            navigate('/home/delivery');
        }).catch((err) => {
            formik.errors.msg = err.message;
            setsubmitButtonDisabled(false);
        })
    }

    const validate = values => {
        let errors = {};
        if (!values.uname) {
            errors.uname = '*Required';
        }
        if (!values.pwd) {
            errors.pwd = '*Required';
        }
        if (!values.pwd2) {
            errors.pwd2 = '*Required';
        }
        if (values.pwd && values.pwd2 && values.pwd !== values.pwd2) {
            errors.pwd2 = 'Passwords should match';
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
                    <input placeholder='User Name' type="text" id="uname" name="uname" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.uname} />
                    {formik.touched.uname && formik.errors.uname ? <div className='errors'>{formik.errors.uname}</div> : null}

                </div>
                <div className='formItem'>
                    <input placeholder='Email' type="email" id="mail" name="mail" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mail} />
                    {formik.touched.mail && formik.errors.mail ? <div className='errors'> {formik.errors.mail}</div> : null}
                </div>
                <div className='formItem'>
                    <input placeholder='Password' type="password" id="pwd" name="pwd" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.pwd} />
                    {formik.touched.pwd && formik.errors.pwd ? <div className='errors'>{formik.errors.pwd}</div> : null}
                </div>
                <div className='formItem'>
                    <input placeholder='Confirm Password' type="password" id="pwd2" name="pwd2" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.pwd2} />
                    {formik.touched.pwd2 && formik.errors.pwd2 ? <div className='errors'>{formik.errors.pwd2}</div> : null}
                </div>
                <div>
                    {formik.errors.msg ? <div className='errors'>{formik.errors.msg}</div> : null}
                    <button disabled={submitButtonDisabled} className='lsbtn'>Sign up</button>
                </div>

            </form>

        </div>
    )
}

export default Signup