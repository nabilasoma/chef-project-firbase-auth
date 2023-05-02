import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import {  Link, useLoaderData, useParams } from 'react-router-dom';

const Details = () => {

    const {id} = useParams();
    console.log(id);

    const detailData = useLoaderData();
    console.log(detailData);

  

    return (
        <div>
            <h3><Link to='/'>Home</Link>this is chef details{id} </h3>
           <div className='container'>
           {
                detailData? (
                    <Card>
                    <Card.Img variant="top" style={{height: 'auto'}} src={detailData.picture} />
                    <Card.Body>
                      <Card.Title>{detailData.name}</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>Cras justo odio</ListGroup.Item>
                      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
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