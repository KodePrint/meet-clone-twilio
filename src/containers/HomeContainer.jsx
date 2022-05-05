import React from 'react'
import { Link } from 'react-router-dom';

const HomeContainer = () => {
  return (
    <div className='HomeContainer-content'>
      <h1>Welcome to Midudev-Meet</h1>
      <Link to='/login'>Login</Link>
      <Link to='/create-room'>Create a Room</Link>
      <Link to='/join-room'>Join a Room</Link>
    </div>
  );
}

export default HomeContainer;