import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import banner from '../assets/banner.jpg'
import banner2 from '../assets/banner3.jpg'


const Banner = () => {
    return (
        
      <Container>
         <div style={{backgroundImage: `url(${banner2})`, height: '300px', backgroundRepeat: 'no-repeat',
       backgroundSize: 'cover'}}>
         <Container fluid className="banner">
        <Row>
            <Col lg={6} className="banner-text text-white w-50">
                <h1>Welcome To Our website</h1>
                <p>Welcome to our Chinese food restaurant! We are excited to have you dine with us and experience the rich flavors and traditions of Chinese cuisine. Our restaurant offers a cozy and inviting atmosphere that is perfect for enjoying a meal with friends and family. From classic favorites to unique specialties, our menu has something for everyone.</p>
            </Col>
          
        </Row>
    </Container>
       </div>
      </Container>
    );
};

export default Banner;