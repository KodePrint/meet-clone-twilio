import React from 'react'
import { Link } from 'react-router-dom'
import '@styles/login.scss'
import Google from '../assets/icons/google-icon.svg'
import Github from '../assets/icons/github-icon.svg'

const Login = () => {
  return (
    <>
      <button type='button' className='btn-login-with btn-login-google'>
        <figure>
          <img src={Google} />
        </figure>
        Continue with Google
      </button>
      <button type='button' className='btn-login-with btn-login-github'>
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
          required 
        />
        <i className="fas fa-user"></i>
      </div>
      <div className="input-group password">
        <input
          className='password'
          type="password" 
          name='password' 
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