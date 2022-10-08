import React from 'react';
import { githubIcon, linkedinIcon } from '../assets/productImages';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <p>Made by Helder and Reactjs</p>
      <a href="https://www.linkedin.com/in/helderme" className="contact-icon">
        <img src={ linkedinIcon } alt="linkedin-icon" />
      </a>
      <a href="https://github.com/helderme" className="contact-icon">
        <img src={ githubIcon } alt="github-icon" />
      </a>
    </div>
  );
}
