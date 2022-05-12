import React, { useRef, useState, useEffect } from 'react'
import Forms from '../containers/Forms';
import LoginComponent from '../components/Login';
import { getLogin } from '../services/authServices/loginService';

const Login = () => {
  const form = useRef(null);

  const handleLongin = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current)
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    }
    getLogin(data)
      .then(data => {
        if(data.error) {
          alert(data.error)
        }
      })
  }

  return (
    <div className="Login form-page">
      <div className="container">
        <h3>
          Login with your account in KodeMeet..!
        </h3>
        <Forms innerRef={form} className='LoginForm'>
          <LoginComponent submit={handleLongin} />
        </Forms>
      </div>
    </div>
  );
}

export default Login;