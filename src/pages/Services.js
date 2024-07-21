import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PhotoCarousel from '../components/carousel/PhotoCarousel';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

const hauteCouturePhotos = [
    '../media/SamplePhoto.png',
    '../media/SamplePhoto.png',
    '../media/SamplePhoto.png',
    '../media/SamplePhoto.png',
    '../media/SamplePhoto.png',
    '../media/SamplePhoto.png'
];
  
const bridalCouturePhotos = [
    '../media/SamplePhoto.png',
    '../media/SamplePhoto.png',
    '../media/SamplePhoto.png',
    '../media/SamplePhoto.png',
    '../media/SamplePhoto.png',
    '../media/SamplePhoto.png'
];
  
const fabricPhotos = [
    '../media/SamplePhoto.png',
    '../media/SamplePhoto.png',
    '../media/SamplePhoto.png',
    '../media/SamplePhoto.png',
    '../media/SamplePhoto.png',
    '../media/SamplePhoto.png'
];

const workshopPhotos = [
    '../media/SamplePhoto.png',
    '../media/SamplePhoto.png',
    '../media/SamplePhoto.png',
    '../media/SamplePhoto.png',
    '../media/SamplePhoto.png',
    '../media/SamplePhoto.png'
];
  

const Services = () => {
    return (
        <Container className="services-container">
            <div className="text-content">
                <h1 className="text-center">Our Services</h1>
                <h3>CUSTOM COUTURE DESIGN</h3>
                <p className="text-center">
                    At Gracile Couture, we believe that fashion is an art form, and every piece should be as unique as you are. 
                    Our custom couture design service allows you to work closely with our designers to create a one-of-a-kind masterpiece. 
                    From initial sketches to the final fitting, we ensure that every detail is tailored to perfection, reflecting your individual style and elegance.
                </p>
            </div>
            <Link to="/book-consultation" className="book-button">BOOK A CONSULTATION</Link>
            <div className="text-content text-start">
                <p className="subtitle">
                    <span className="subtitle1">Haute Couture Collection</span><br />
                    Explore our exclusive haute couture collection, where each garment is a testament to our craftsmanship and creativity. 
                    Our collection features meticulously handcrafted pieces using the finest fabrics and embellishments. 
                    Whether you’re looking for a stunning evening gown or a sophisticated cocktail dress, our collection offers timeless elegance and unparalleled quality.
                </p>
                <Link to="/gallerypages/collections" className="gallery-links">VIEW GALLERY &nbsp;&raquo;</Link>
            </div>
            <PhotoCarousel photos={hauteCouturePhotos} photosPerSlide={3} />
            <div className="text-content text-start">
                <p className="subtitle">
                    <span className="subtitle1">Bespoke Tailoring</span><br />
                    Experience the luxury of bespoke tailoring with Gracile Couture. Our skilled artisans take precise measurements to create garments that fit you flawlessly. From suits and blazers to dresses and skirts, our bespoke tailoring service ensures that every piece is made to measure, providing you with the perfect fit and ultimate comfort.
                </p>
            </div>
            <div className="text-content text-start">
                <p className="subtitle">
                    <span className="subtitle1">Bridal Couture</span><br />
                    Your wedding day deserves nothing but the best. Our bridal couture service offers personalized consultations to design your dream wedding gown. We pay attention to every detail, from the choice of fabric to intricate lacework and beading, ensuring that you look and feel like royalty on your special day. Let us create a gown that captures the essence of your love story.
                </p>
                <Link to="/gallerypages/collections" className="gallery-links">VIEW GALLERY &nbsp;&raquo;</Link>
            </div>
            <PhotoCarousel photos={bridalCouturePhotos} photosPerSlide={3} />
            <div className="text-content text-start">
                <p className="subtitle">
                    <span className="subtitle1">Wardrobe Consultation</span><br />
                    Elevate your style with our wardrobe consultation service. Our fashion experts provide personalized advice to help you curate a wardrobe that reflects your unique taste and lifestyle. Whether you need assistance with selecting the perfect outfit for a special occasion or building a versatile and stylish everyday wardrobe, we are here to guide you.
                </p>
                <Link to="/gallerypages/collections" className="gallery-links">VIEW GALLERY &nbsp;&raquo;</Link>
            </div>
            <div className="text-content text-start">
                <p className="subtitle">
                    <span className="subtitle1">Alteration and Repair</span><br />
                    Maintain the beauty and longevity of your cherished  Gracile Couture garments with our professional alteration and repair services. Our experienced seamstresses are skilled in making precise adjustments to ensure your clothing fits perfectly. From hemming and resizing to repairing delicate fabrics and embellishments, we handle each piece with the utmost care.
                </p>
            </div>
            <div className="text-content text-start">
                <p className="subtitle">
                    <span className="subtitle1">Fabric and Embellishment Sourcing</span><br />
                    Discover the finest fabrics and embellishments with our sourcing service. We offer a curated selection of luxurious materials, including silk, satin, lace, and custom embroidery. Whether you’re a designer or a fashion enthusiast, our sourcing service provides access to exclusive materials that will enhance the beauty and quality of your creations.
                </p>
                <Link to="/gallerypages/fabrics" className="gallery-links">VIEW GALLERY &nbsp;&raquo;</Link>
            </div>
            <PhotoCarousel photos={fabricPhotos} photosPerSlide={3} />
            <div className="text-content text-start">
                <p className="subtitle">
                    <span className="subtitle1">Fashion Workshops</span><br />
                    Join our fashion workshops to learn the art of haute couture from industry experts. Our workshops cover a range of topics, including design techniques, sewing skills, and fabric selection. Whether you’re a beginner or an experienced designer, our workshops provide valuable insights and hands-on experience to help you master the craft of fashion design
                </p>
                <Link to="/workshops" className="gallery-links">VIEW WORKSHOPS &nbsp;&raquo;</Link>
            </div>
            <PhotoCarousel photos={workshopPhotos} photosPerSlide={3} />
        </Container>
    );
  };

  export default Services;
