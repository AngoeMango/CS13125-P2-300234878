import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/Workshops.css';

const workshops = [
  {
    title: "Beginner Sewing Workshop",
    description: "This workshop is perfect for those who are new to sewing. You will learn the basics of sewing, including how to use a sewing machine, basic stitches, and simple sewing techniques.",
    goal: "By the end of this workshop, you will be able to complete a small sewing project, such as a pillowcase or tote bag, and feel confident using a sewing machine.",
    price: "$50",
    photo: "../media/SamplePhoto.png",
  },
  {
    title: "Intermediate Sewing Workshop",
    description: "This workshop is designed for those who have some basic sewing experience and want to expand their skills. You will learn advanced sewing techniques, including sewing zippers, buttonholes, and working with different types of fabrics.",
    goal: "By the end of this workshop, you will be able to complete more complex sewing projects, specifically being able to alter and repair garments",
    price: "$75",
    photo: "../media/SamplePhoto.png",
  },
  {
    title: "Professional Sewing Workshop",
    description: "This workshop is for those looking to jumpstart a career in tailoring and fashion. You will learn how to sew and complete a full outfit, which includes a top and bottom.",
    goal: "By the end of this workshop, you will have sucessfully completed a full garment sewing project. Projects may vary.",
    price: "$150",
    photo: "../media/SamplePhoto.png",
  },
];

const Workshops = () => {
    const navigate = useNavigate();
  
    const handleEnrollClick = (workshop) => {
      navigate('/enroll', { state: { workshop } });
    };
  
    return (
      <Container className="workshops-container mt-5">
        <h1 className="text-center mb-4">Sewing Workshops</h1>
        <Row>
          {workshops.map((workshop, index) => (
            <Col md={12} key={index} className="mb-4">
              <Card>
                <Card.Img variant="top" src={workshop.photo} />
                <Card.Body>
                  <Card.Title>{workshop.title}</Card.Title>
                  <Card.Text>{workshop.description}</Card.Text>
                  <Card.Text><strong>Goal:</strong> {workshop.goal}</Card.Text>
                  <Card.Text><strong>Price:</strong> {workshop.price}</Card.Text>
                  <Button className="enrol-button" variant="primary" onClick={() => handleEnrollClick(workshop)}>ENROLL NOW</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };
  
  export default Workshops;
