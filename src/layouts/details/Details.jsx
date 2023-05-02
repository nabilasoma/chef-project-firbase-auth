import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Detail.css'

const Details = () => {

    const [buttonDisabled, setButtonDisabled] = useState(false);

    const { id } = useParams();
    console.log(id);

    const detailData = useLoaderData();
    console.log(detailData);

    const handleClick = () => {
        setButtonDisabled(true);
        toast.success('Button clicked!');
      };



    return (
        <div>
            <div className='container row'>
                {
                    detailData ? (
                        <Card>
                            <Card.Img variant="top" className='images' src={detailData.picture} />
                            <Card.Body>
                                <Card.Title className='text-danger'><b>Name: </b>{detailData.name}</Card.Title>
                                <Card.Text className='text-danger'>
                                    <b>Bio:</b> {detailData.bio}
                                </Card.Text>
                                <Card.Body>
                                <button onClick={handleClick} disabled={buttonDisabled}>Click me</button>
                            </Card.Body>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item className='text-danger'>
                                    <b>Recipe: </b> <ul>
                                        {detailData.foodName.map(food => (
                                            <li key={food}>{food}</li>
                                        ))}
                                    </ul>
                                </ListGroup.Item>
                                <ListGroup.Item className='text-danger'>
                                    <b>Ingredients: </b> <ul>
                                        {detailData.ingredients.map(ingredient => (
                                            <li key={ingredient}>{ingredient}</li>
                                        ))}
                                    </ul>
                                </ListGroup.Item>
                                <ListGroup.Item className='text-danger'>
                                    <b>Cooking Method:</b> {detailData.method}
                                </ListGroup.Item>
                                <ListGroup.Item  className='text-danger'>
                                    <b>Years of Experience:</b> {detailData.yearsOfExp}
                                </ListGroup.Item>
                                <ListGroup.Item className='text-danger'>
                                   <b>Likes: </b> {detailData.likes}
                                </ListGroup.Item>
                            </ListGroup>
                            
                        </Card>
                    )
                        :
                        <p>Loading</p>
                }
            </div>

        </div>
    );
};

export default Details;