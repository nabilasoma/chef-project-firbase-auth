import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './ChefCard.css'
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import About from '../../about/About';

const ChefCard = ({ singleChef }) => {
    const { name, bio, picture, numRecipes, yearsOfExp, id } = singleChef;
    return (
        <div>
            <Card>
                <LazyLoad>
                    <Card.Img variant="top" className='images' src={picture} />
                </LazyLoad>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {bio}
                    </Card.Text>
                    <Link to={`/chefInfo/${id}`}><Button variant="secondary">View Recipes</Button></Link>
                </Card.Body>
            </Card>
            
        </div>
    );
};

export default ChefCard;