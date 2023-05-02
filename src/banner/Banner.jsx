import React from 'react';
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import banner from '../../public/banner.jpg'
import slide1 from '../../public/slide1.jpg'
import slide2 from '../../public/slide2.png'

const Banner = () => {
    return (
        
      <div style={{}}>
         <div style={{backgroundImage: `url(${banner})`, height: '300px', backgroundRepeat: 'no-repeat',
       backgroundSize: 'cover'}}>
         <Container fluid className="banner">
        <Row>
            <Col lg={6} className="banner-text text-white w-50">
                <h1>Welcome to my website</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac neque eget sapien feugiat facilisis.</p>
            </Col>
            <Col lg={6} className="banner-slider">
                <Carousel>
                    <Carousel.Item>
                        <img className='h-50 w-50 mt-2' src={slide1} alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='h-50 w-50 mt-2' src={slide2} alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="path/to/slide-3.jpg" alt="Third slide" />
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
    </Container>
       </div>
      </div>
    );
};

export default Banner;