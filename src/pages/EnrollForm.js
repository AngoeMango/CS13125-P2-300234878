import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import '../styles/EnrollForm.css';

const EnrollForm = () => {
	const location = useLocation();
	const workshop = location.state ? location.state.workshop : {};
	const stripe = useStripe();
	const elements = useElements();
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [isProcessing, setIsProcessing] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsProcessing(true);

		if (!stripe || !elements) {
			return;
		}

		const cardElement = elements.getElement(CardElement);

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card: cardElement,
			billing_details: {
				firstName,
				lastName,
				email,
				phone,
			},
		});

		if (error) {
			setErrorMessage(error.message);
			setIsProcessing(false);
		} else {
			console.log('PaymentMethod:', paymentMethod);
			// Send paymentMethod.id to your server for processing payment
			setIsProcessing(false);
			alert('Enrollment successful! Payment processed.');
		}
	};

	return (
		<Container className="enroll-form-container mt-5">
		<h1 className="text-center">Enroll in {workshop.title}</h1>
		<Form onSubmit={handleSubmit}>
			<Row className='row-style'>
				<Col md={6}>
					<Form.Group controlId="formFirstName">
						<Form.Label className="text-start">First Name</Form.Label>
						<Form.Control type="text" placeholder="Enter your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
					</Form.Group>
				</Col>
				<Col md={6}>
					<Form.Group controlId="formLastName">
						<Form.Label className="text-start">Last Name</Form.Label>
						<Form.Control type="text" placeholder="Enter your last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
					</Form.Group>
				</Col>
			</Row>
			<Row className='row-style'>
				<Col md={6}>
					<Form.Group controlId="formEmail">
					<Form.Label className="text-start">Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
					</Form.Group>
				</Col>
				<Col md={6}>
					<Form.Group controlId="formPhone">
					<Form.Label className="text-start">Phone Number</Form.Label>
					<Form.Control type="text" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
					</Form.Group>
				</Col>
			</Row>
			<Form.Group controlId="formCard">
			<Form.Label>Credit Card Details</Form.Label>
			<CardElement />
			</Form.Group>
			{errorMessage && <div className="text-danger mt-3">{errorMessage}</div>}
			<Button variant="primary" type="submit" className="mt-3 button-enroll" disabled={!stripe || isProcessing}>
			{isProcessing ? 'Processing...' : 'ENROLL'}
			</Button>
		</Form>
		</Container>
	);
};

	export default EnrollForm;
