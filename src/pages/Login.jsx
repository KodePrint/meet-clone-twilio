import React from 'react'
import Forms from '../containers/Forms';
import LoginComponent from '../components/Login';

const Login = () => {
  return (
    <div className="Login form-page">
      <div className="container">
        <h3>
          Login with your account in KodeMeet..!
        </h3>
        <Forms className='LoginForm'>
          <LoginComponent />
        </Forms>
      </div>
    </div>
  );
}

export default Login;