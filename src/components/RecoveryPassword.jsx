import React from 'react'
import { Link } from 'react-router-dom'
import '@styles/password-recovery.scss'

const RecoveryPassword = () => {
  return (
    <>
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
      <button className="btn btn-primary submit sendmail-btn">
        Send Mail
      </button>
      <Link to='/login'>Back to Login</Link>
    </>
  );
}

export default RecoveryPassword;