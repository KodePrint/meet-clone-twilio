import React, { useState } from 'react';
import StrengthPasswordVerify from './StrengthPasswordVerify';

const SignupForm = () => {

  const [inputPassword, setInputPassword] = useState('');

  const handleInputPassword = (e) => {
    if (e.target.value.length > 0) {
      setInputPassword(e.target.value);
    }
  }
  
  
  return (
    <form className="SignupForm">
      <div className="input-group name">
        <i className="fas fa-user"></i>
        <input type="text" name='name' />
      </div>
      <div className="input-group email">
        <i className="fas fa-envelope"></i>
        <input type="text" name='email' />
      </div>
      <div className="input-group password">
        <i className="fas fa-unlock-alt"></i>
        <input 
          type="password" 
          name='password' 
          onChange={handleInputPassword} 
        />
      </div>
      <div className="input-group password2">
        <i className="fas fa-lock-alt"></i>
        <input type="password" name='password2' />
      </div>
      <StrengthPasswordVerify password={inputPassword} />
      <button className="btn btn-primary submit">
        Signup
      </button>
    </form>
  );
}

export default SignupForm;