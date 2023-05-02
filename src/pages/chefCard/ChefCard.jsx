import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './ChefCard.css'

const ChefCard = ({singleChef}) => {
    const {name, bio, picture, numRecipes, yearsOfExp} = singleChef;
    return (
        <div>
            <Card>
                <Card.Img variant="top" className='images' src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {bio}
                    </Card.Text>
                    <Button variant="primary">View Recipes</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ChefCard;