import React from 'react';
import { Link } from 'react-router-dom';
import Forms from '../containers/Forms';
import SignupComponent from '../components/Signup';

import '@styles/signup.scss';

const Signup = () => {
  return (
    <div className="Signup form-page">
      <div className="container">
        <h3>
          Sign up to the platform and start enjoying the benefits..!
        </h3>
        <Forms className='SignupForm'>
          <SignupComponent />
        </Forms>
        <p>
          Do you already have an account?
          <Link to='/login'>Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;