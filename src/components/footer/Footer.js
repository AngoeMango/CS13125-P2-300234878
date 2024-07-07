// src/components/Footer.js
import React from 'react';
import './Footer.css';
import logo from '../../media/GCLogoWhite.svg'; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className="footer text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <ul className="list-unstyled text-left">
              <li>ABOUT US</li>
              <li>SERVICES</li>
              <li>GALLERY</li>
              <li>GARMENT VIEWER</li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="list-unstyled">
              <li>WORKSHOPS</li>
              <li>BLOG</li>
              <li>CONTACT US</li>
              <li>BOOK A CONSULTATION</li>
            </ul>
          </div>
          <div className="col-md-3 text-center">
            <img src={logo} alt="Logo" className="footer-logo mb-2" />
            <p>GRACILE COUTURE ©2024</p>
          </div>
          <div className="col-md-3">
            <ul className="list-unstyled">
              <li>123 STREET</li>
              <li>CITY, PROVINCE</li>
              <li>A1B 2C3</li>
              <li>(123) 456-7890</li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="list-unstyled">
              <li>OFFICE HOURS</li>
              <li>11AM - 6PM: MON - SAT</li>
              <li>12PM - 5PM: SUN</li>
              <li>FOR IN-OFFICE AND VIRTUAL HOURS</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
