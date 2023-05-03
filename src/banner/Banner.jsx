import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import banner from '../assets/banner.jpg'


const Banner = () => {
    return (
        
      <div>
         <div style={{backgroundImage: `url(${banner})`, height: '300px', backgroundRepeat: 'no-repeat',
       backgroundSize: 'cover'}}>
         <Container fluid className="banner">
        <Row>
            <Col lg={6} className="banner-text text-white w-50">
                <h1>Welcome to my website</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac neque eget sapien feugiat facilisis.</p>
            </Col>
          
        </Row>
    </Container>
       </div>
      </div>
    );
};

export default Banner;