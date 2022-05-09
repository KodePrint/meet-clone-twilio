import React from 'react';
import { Link } from 'react-router-dom';
import SignupForm from '@containers/SignupForm';
import Login from '@pages/Login';

import '@styles/signup.scss';

const Signup = () => {
  return (
    <div className="Signup">
      <div className="signup-container">
        <h3>
          Sign up to the platform and start enjoying the benefits..!
        </h3>
        <SignupForm />
        <p>
          Do you already have an account?
          <Link to='/login'>Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;