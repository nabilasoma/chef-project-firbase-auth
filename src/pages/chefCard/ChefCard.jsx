import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './ChefCard.css'
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import About from '../../about/About';

const ChefCard = ({ singleChef }) => {
    const { name, bio, picture, numRecipes, yearsOfExp, id, foodName, likes } = singleChef;
    return (
        <Row>
            <Col>
            <Card>
                <LazyLoad>
                    <Card.Img variant="top" className='images' src={picture} />
                </LazyLoad>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                   <div className='d-flex'>
                   <Card.Text className='text-secondary'> 
                       <b>
                       I have 
                        { yearsOfExp }
                       years of Experience
                       </b>
                    </Card.Text>
                    <Card.Text className='text-success'> 
                   <b> My Famous Recipes are: 
                  <ul>
                  {foodName.map(food => (<li key={food}>{food}</li>))}
                  </ul>
                   </b>   
                    </Card.Text>
                   </div>
                   <div className='d-flex justify-space-between align-items-center'>
                    <b>Likes: {likes}</b>
                   <Link to={`/chefInfo/${id}`}><Button variant="secondary">View Recipes</Button></Link>
                   </div>
                </Card.Body>
            </Card>
            </Col>
            
        </Row>
    );
};

export default ChefCard;