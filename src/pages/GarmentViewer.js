// src/pages/GarmentDesigner.js
import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import '../styles/GarmentViewer.css';
import GarmentViewerDemo from '../media/GarmentViewer.png';


const GarmentViewer = () => {


  return (
    <Container className="garment-designer-container">
      <h1 className="text-center">Garment Viewer</h1>
      <p className="text-center">Design Your Dream Garment in 3D</p>
      
      <div className="steps-container">
        <p>Welcome to our 3D Virtual Garment Designer, where your fashion fantasies come to life. This innovative tool allows you to create, customize, and visualize your own unique garments in a dynamic 3D environment. Whether you’re envisioning a stunning evening gown, a chic summer dress, or a tailored suit, our designer offers endless possibilities to express your style.</p>
        <Row>
          <Col md={4}>
            <ol>
              <li>Choose Your Base: Start by selecting a base garment from our extensive library of styles.</li>
              <li>Customize Your Design: Use our intuitive tools to adjust the fabric, fit, and details of your garment. Experiment with different combinations to find your perfect look.</li>
              <li>Visualize in 3D: See your design come to life in a stunning 3D environment. Make adjustments in real-time to achieve the perfect fit and style.</li>
            </ol>
          </Col>
          <Col md={8}>
            <ul>
                <li>Intuitive Design Interface: Easily navigate through our user-friendly interface to start designing your perfect garment. No previous design experience is required – our tool is crafted for both beginners and experts alike.</li>
                <li>Extensive Fabric Library: Explore a wide range of fabrics, from luxurious silks and satins to casual linens and cottons. Choose the perfect material to bring your design to life, and see how different fabrics drape and move on your 3D model.</li>
                <li>Customizable Styles and Patterns: Select from an array of garment styles and patterns, including dresses, suits, blouses, and more. Customize each piece to your exact specifications, including length, fit, neckline, sleeves, and embellishments.</li>
                <li>Real-Time Visualization: Watch your creation come to life in real-time 3D. Rotate, zoom, and view your garment from every angle to ensure every detail is perfect. Experience the look and feel of your design before it’s ever made.</li>
            </ul>
          </Col>
        </Row>
        <img className="garmentviewercentre" src={GarmentViewerDemo} alt="Sample Dress" />
      </div>

      <p className="text-center">
        Experience the future of fashion design with our 3D Virtual Garment Designer. Start creating today and turn your vision into reality with just a few clicks!
      </p>
    </Container>
  );
};

export default GarmentViewer;
