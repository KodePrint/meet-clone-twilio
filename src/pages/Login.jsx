import React from 'react'
import Forms from '../containers/Forms';
import LoginComponent from '../components/Login';

const Login = () => {
  return (
    <div className="Login">
      <div className="login-container">
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