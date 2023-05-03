import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className='bg-secondary p-4 text-white mt-4'>
            <Container>
                <Row>
                    <Col md={3}>
                        <h5>About Chinese Food</h5>
                        <ul>
                            <li>Originated in China over 5,000 years ago</li>
                            <li>Rich in flavors and diversity</li>
                            <li>Influenced by different regions and dynasties</li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5>Popular Chinese Dishes</h5>
                        <ul>
                            <li>Kung Pao Chicken</li>
                            <li>Hot and Sour Soup</li>
                            <li>Dumplings</li>
                            <li>Spring Rolls</li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5>Chinese Food Culture</h5>
                        <ul>
                            <li>Family-style dining</li>
                            <li>Use of chopsticks</li>
                            <li>Importance of balance and harmony</li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5>Health Benefits</h5>
                        <ul>
                            <li>Low in saturated fat and high in nutrients</li>
                            <li>Can improve digestion and reduce inflammation</li>
                            <li>Contains antioxidants and anti-cancer properties</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;