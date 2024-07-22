import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import './App.css';

import NavBar from './components/navbar/NavBar';
import Home from './pages/Home';
import Services from './pages/Services';

import Gallery from './pages/Gallery';
import Collections from './pages/gallerypages/Collections';
import Fabrics from './pages/gallerypages/Fabrics'

import Workshops from './pages/Workshops';
import GarmentViewer from './pages/GarmentViewer';
import ContactUs from './pages/ContactUs';
import BookConsultation from './pages/BookConsultation';
import Footer from './components/footer/Footer';

import EnrollForm from './pages/EnrollForm';
const stripePromise = loadStripe('your-publishable-key-here');

function App() {
	return (
		<Router>
			<Elements stripe={stripePromise}>
				<div className="App">
					<NavBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/services" element={<Services />} />
						<Route path="/gallery" element={<Gallery />} />
						<Route path="/gallerypages/collections" element={<Collections />} />
						<Route path="/gallerypages/fabrics" element={<Fabrics />} />
						<Route path="/workshops" element={<Workshops />} />
						<Route path="/garment-viewer" element={<GarmentViewer />} />
						<Route path="/contact-us" element={<ContactUs />} />
						<Route path="/book-consultation" element={<BookConsultation />} />

						<Route path="/enroll" element={<EnrollForm />} />
					</Routes>
					<Footer />
				</div>
			</Elements>
		</Router>
	);
}

export default App;
