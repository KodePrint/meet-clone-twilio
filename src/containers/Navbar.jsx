import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Icon from '../assets/images/Icon.svg';
import Center from '../assets/images/Logo_Center.svg';
import Inline from '../assets/images/Logo_Inline.svg';
import '../styles/navbar.scss';

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);


  useEffect(() => {
    
  }, []);
  return (
    <nav className={`Navbar ${showNav && 'show'}`}>
      <Link to="/">
        <figure className='logo-container'>
          <img src={Icon} alt="KodeMeet" />
          <span>
            KodeMeet
          </span>
        </figure>
      </Link>
      <ul className='menu'>
        <li><Link to=''>Login</Link></li>
        <li><Link to=''>Signup</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;