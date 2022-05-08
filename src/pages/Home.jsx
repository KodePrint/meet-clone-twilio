import React from 'react'
import { Link } from 'react-router-dom'
import HomeContainer from '@containers/HomeContainer';
import Icon from '../assets/images/Icon.svg';
import Navbar from '../containers/Navbar';
import conference from '../assets/images/conference.jpg';
import '../styles/home.scss';


const Home = () => {
  return (
    <div className="Home">
      <div className='hero'>
        <h1 className='title'>
          <img src={Icon} alt="Logo" />
          KodeMeet
        </h1>
        <p className='sub-title'>
          The platform that will revolutionize the community
        </p>
        <p>Create more than just meetings, enhance community experiences and get more done with our free-to-use platform.</p>
        <Link to='/login' className='btn btn-primary login'>Login</Link>
        <Link to='/sign-up' className='btn btn-secondary signup'>Signup</Link>
      </div>
      <div className="image-container">
        <picture>
          <img src={conference} alt="" />
        </picture>
      </div>
      
    </div>
  );
}

export default Home;