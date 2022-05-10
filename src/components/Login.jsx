import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuthUser } from '../services/authWith'

import '@styles/login.scss'
import Google from '../assets/icons/google-icon.svg'
import Github from '../assets/icons/github-icon.svg'

const Login = () => {
  const navigate = useNavigate()
  
  const handleAuth = (value) => {
    console.log(value)
  }

  return (
    <>
      <button
        className='btn-login-with btn-login-google'
        onClick={handleAuth('google')}
        type='button' 
      >
        <figure>
          <img src={Google} />
        </figure>
        Continue with Google
      </button>
      <button
        onClick={handleAuth('github')}
        type='button' 
        className='btn-login-with btn-login-github'
      >
        <figure>
          <img src={Github} />
        </figure>
        Continue with Github
      </button>
      <div className="input-group email">
        <input 
          className='email' 
          type="email" 
          name='email'
          placeholder='Enter your email'
          autoComplete='off'
          required 
        />
        <i className="fas fa-user"></i>
      </div>
      <div className="input-group password">
        <input
          className='password'
          type="password" 
          name='password' 
          placeholder='Enter your password'
          autoComplete='off'
          required 
        />
        <i className="fas fa-lock-alt"></i>
      </div>
      <button className='btn btn-primary login-btn'>Login</button>
      <Link to='/password-recovery'>have you forgotten your password?</Link>
      <p>
        You do not have an account? 
        <Link to='/sign-up'>Signup</Link>
      </p>
    </>
  );
}

export default Login;