import React from 'react'
import  Forms from '../containers/Forms'
import RecoveryPassword from '../components/RecoveryPassword';

const PasswordRecovery = () => {
  return (
    <div className='PasswordRecovery form-page'>
      <div className="container">
        <h3>
          Password Recovery..!
        </h3>
        <p>
          Please provide the email with which you have linked your account
        </p>
        <Forms className='password-recovery'>
          <RecoveryPassword />
        </Forms>
      </div>
    </div>
  );
}

export default PasswordRecovery;