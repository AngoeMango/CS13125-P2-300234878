// src/components/Home.js
import React from 'react';
import '../styles/Home.css';
import runway1 from '../media/videos/Runway1.mp4';
import SamplePhoto from '../media/SamplePhoto.png';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <video autoPlay loop muted className="background-video">
          <source src={runway1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay-text">
          <h1>ENTRER</h1>
          <p>Sew and Style with Grace and Beauty</p>
        </div>
      </div>

      <div className="content-container">
        <div className="row">
          <div className="col-md-6">
            <img src={SamplePhoto} alt="Sample" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <p>Gracile Couture is a premier fashion house dedicated to the art of haute couture and bespoke tailoring. Renowned for its meticulous craftsmanship and innovative designs, Gracile Couture seamlessly blends traditional techniques with contemporary aesthetics. Our collections are a testament to our commitment to excellence, featuring luxurious fabrics, intricate embellishments, and timeless elegance. Each piece is carefully crafted to reflect the unique style and personality of our clients, ensuring that every garment is a true masterpiece.</p>
            <p>At Gracile Couture, we believe that fashion is an expression of individuality and a celebration of beauty. Our custom couture services offer a personalized experience, allowing clients to collaborate with our skilled designers from initial sketches to the final fitting. Whether it’s a stunning evening gown, a sophisticated cocktail dress, or a tailored suit, we strive to create garments that exude confidence and sophistication. With a passion for perfection and an eye for detail, Gracile Couture is dedicated to making every client feel exceptional and elegantly adorned.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
