import React from 'react';
import { Container } from 'react-bootstrap';
import ChatInterface from '../components/chat/ChatInterface';
import '../styles/ContactUs.css';
import ContactUsForm from '../components/form/ContactUsForm';

const ContactUs = () => {
    return (
        <Container className="contact-us mt-5">
            <h1 className="text-center">Contact Us</h1>
            <p className="body">Chat live with one of our in-office team members or find our other contact information below! If live chat is unavailable, please contact us via form and we will get back to you as soon as we can!</p>
            <h3>LIVE CHAT OFFICE HOURS</h3>
            <p>11AM - 6PM: MON - SAT<br />
            12PM - 5PM: SUN</p>
            <hr className="separator-line" />
            <ChatInterface />
            <hr className="separator-line" />
            <ContactUsForm />
        </Container>
    );
};

export default ContactUs;
