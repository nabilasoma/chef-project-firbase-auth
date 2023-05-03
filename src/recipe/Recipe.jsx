import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Recipe = () => {
    return (

        <Container className='mt-4'>
            <h3 className='text-secondary text-center mt-4'>Our Favorite Recipes</h3>
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Img style={{height: '250px'}} variant="top" src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                        <Card.Body>
                            <Card.Title>Kung Pao Chicken</Card.Title>
                            <Card.Text>
                                This classic Sichuan dish is a spicy and savory stir-fry made with chicken, peanuts, and vegetables.
                            </Card.Text>
                            <Card.Link href="#">View Recipe</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img style={{height: '250px'}} variant="top" src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" />
                        <Card.Body>
                            <Card.Title>Hot and Sour Soup</Card.Title>
                            <Card.Text>
                                A comforting soup made with mushrooms, tofu, bamboo shoots, and a tangy broth flavored with vinegar and white pepper.
                            </Card.Text>
                            <Card.Link href="#">View Recipe</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img style={{height: '250px'}} variant="top" src="https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                        <Card.Body>
                            <Card.Title>Dumplings</Card.Title>
                            <Card.Text>
                                These steamed or fried parcels of meat, seafood, or vegetables are a Chinese staple and perfect for sharing.
                            </Card.Text>
                            <Card.Link href="#">View Recipe</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
};

export default Recipe;