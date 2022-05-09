import React, { useState } from 'react';
import StrengthPasswordVerify from './StrengthPasswordVerify';

const SignupForm = () => {

  const [inputPassword, setInputPassword] = useState('');
  const [inputRePassword, setInputRePassword] = useState('');

  const handleInputPassword = (e) => {
    if (e.target.value.length > 0) {
      setInputPassword(e.target.value);
    }
  }

  const handleCheckPassword2 = (e) => {
    if (e.target.value.length > 0) {
      setInputRePassword(e.target.value);
    }
    if (inputPassword === inputRePassword) {
      console.log('Password is correct');
    }
  }
  
  
  return (
    <form className="SignupForm">
      <div className="input-group name">
        <input 
          className='name' 
          type="text" 
          name='name'
          required 
        />
        <i className="fas fa-user"></i>
      </div>
      <div className="input-group email">
        <input 
          className='email' 
          type="email" 
          name='email'
          required 
        />
        <i className="fas fa-envelope"></i>
      </div>
      <div className="input-group password">
        <input
          className='password'
          type="password" 
          name='password' 
          onChange={handleInputPassword}
          required 
        />
        <i className="fas fa-unlock-alt"></i>
      </div>
      <div className="input-group password2">
        <input 
          className='password2' 
          type="password" 
          name='password2'
          onChange={handleCheckPassword2}
          required 
        />
        <i className="fas fa-lock-alt"></i>
      </div>
      <StrengthPasswordVerify password={inputPassword} />
      <button className="btn btn-primary submit">
        Signup
      </button>
    </form>
  );
}

export default SignupForm;