import React from 'react';
import SignupForm from '@containers/SignupForm';

import '@styles/signup.scss';

const Signup = () => {
  return (
    <div className="Signup">
      <div className="signup-container">
        <h3>
          Sign up to the platform and start enjoying the benefits..!
        </h3>
        <SignupForm />
      </div>
    </div>
  );
}

export default Signup;