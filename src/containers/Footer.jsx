import React from 'react';
import '../styles/footer.scss'

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="contacts">
        <a href="" className='social-link'>
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="" className='social-link'>
          <i className="fab fa-github-alt"></i>
        </a>
        <a href="" className='social-link'>
          <i className="fab fa-youtube"></i>
        </a>
        <a href="" className='social-link'>
          <i className="fab fa-facebook-f"></i>
        </a>
      </div>
      <div className="copyright">
        <p>Copyright © 2022 KodeMeet by KodePrint</p>
        <p>Created by Kevin Palma</p>
      </div>
    </footer>
  );
}

export default Footer;