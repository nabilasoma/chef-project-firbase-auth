import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
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
        toast('Chicken Samba!');
       
      };



    return (
        <div>
            <div className='container w-50 mx-auto mt-4'>
                {
                    detailData ? (
                        <Card>
                            <Card.Img variant="top" className='images' src={detailData.picture} />
                            <Card.Body>
                                <Card.Title className='text-danger'><b>Name: </b>{detailData.name}</Card.Title>
                                <Card.Text className='text-danger'>
                                    <b>Bio:</b> {detailData.bio}
                                </Card.Text>
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
                                <Card.Body>
                                <Button  onClick={handleClick} disabled={buttonDisabled} variant="primary">Favorite</Button>
                                <ToastContainer />
                                <Link to='/'> <Button className='mt-2' variant="primary">Home</Button></Link>
                               
                            </Card.Body>
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