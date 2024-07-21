import React, { useState } from 'react';
import './BookConsultationForm.css'; // Optional: for additional custom styling

const BookConsultationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        description: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="container mt-5">
                <h1 className="text-center">Query Sent!</h1>
                <p className="text-center">Here is a summary of your request. Our team is working very hard to get you back to you. <br /> Thank you for confiding in Gracile Couture!</p>
                <div className="summary-box text-start">
                    <p><strong>FIRST NAME:</strong> <div className="form-data">{formData.firstName}</div></p>
                    <p><strong>LAST NAME:</strong> <div className="form-data">{formData.lastName}</div></p>
                    <p><strong>EMAIL:</strong> <div className="form-data">{formData.email}</div></p>
                    <p><strong>PHONE NUMBER:</strong> <div className="form-data">{formData.phoneNumber}</div></p>
                    <p><strong>REQUEST SUMMARY:</strong> <div className="form-data">{formData.description}</div></p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center">Contact Us</h1>
            <p className="text-center">Got something on your mind? Do you want to ask us a quick question on our services? Let us know below!</p>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6 mb-3 input-container">
                        <label htmlFor="firstName" className="text-start w-100 required">First Name</label>
                        <input type="text" className="form-control custom-input" id="firstName" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6 mb-3 input-container">
                        <label htmlFor="lastName" className="text-start w-100 required">Last Name</label>
                        <input type="text" className="form-control custom-input" id="lastName" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3 input-container">
                        <label htmlFor="email" className="text-start w-100 required">Email</label>
                        <input type="email" className="form-control custom-input" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6 mb-3 input-container">
                        <label htmlFor="phoneNumber" className="text-start w-100 required">Phone Number</label>
                        <input type="tel" className="form-control custom-input" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
                    </div>
                </div>
                <div className="mb-3 input-container">
                    <label htmlFor="description" className="text-start w-100 required">ENTER A MESSAGE</label>
                    <textarea className="form-control custom-input" id="description" name="description" rows="5" placeholder="Enter a message" value={formData.description} onChange={handleChange} required></textarea>
                </div>
                <div className="text-end">
                    <button type="submit" className="btn custom-submit-btn">Send Request</button>
                </div>
            </form>
        </div>
    );
};

export default BookConsultationForm;
