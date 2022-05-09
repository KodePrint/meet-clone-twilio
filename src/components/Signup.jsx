import React, {useState, useEffect} from 'react'
import StrengthPasswordVerify from '@components/StrengthPasswordVerify';

const Signup = () => {

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
  }

  useEffect(() => {
    if (inputPassword === inputRePassword) {
      console.log('Password is correct');
    } else {
      let input = document.getElementsByName('password2')
      input[0]
    }
  }, [inputRePassword])

  return (
    <>
      <div className="input-group name">
          <input 
            className='name' 
            type="text" 
            name='name'
            placeholder='Enter your name'
            autocomplete='off'
            required 
          />
          <i className="fas fa-user"></i>
      </div>
      <div className="input-group email">
        <input 
          className='email' 
          type="email" 
          name='email'
          placeholder='Enter your email'
            autocomplete='off'
          required 
        />
        <i className="fas fa-envelope"></i>
      </div>
      <div className="input-group password">
        <input
          className='password'
          type="password" 
          name='password' 
          placeholder='Enter your password'
            autocomplete='off'
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
          placeholder='Re-enter your password'
            autocomplete='off'
          onChange={handleCheckPassword2}
          required 
        />
        <i className="fas fa-lock-alt"></i>
      </div>
      <StrengthPasswordVerify password={inputPassword} />
      <button className="btn btn-primary submit signup-btn">
        Signup
      </button>
      </>
  );
}

export default Signup;