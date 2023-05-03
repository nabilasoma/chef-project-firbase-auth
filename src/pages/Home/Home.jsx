import React, { useEffect, useState } from 'react';
import './Home.css'
import { useLoaderData, useParams } from 'react-router-dom';
import ChefCard from '../chefCard/ChefCard';
import Banner from '../../banner/Banner';
import About from '../../about/About';
import Recipe from '../../recipe/Recipe';
import { Card, Col, Container, Row } from 'react-bootstrap';


const Home = () => {
   
    const {id} = useParams();
    console.log(id);

    const loadChef = useLoaderData();
    console.log(loadChef);

   
    return (
       <div>
        <Banner></Banner>
         <Container className='mt-4'>
            
           <Row>
            <Col lg={12} md={6} xs={12}>
           
          <div className='cardShow'>
          {
                 loadChef.map(singleChef => <ChefCard key={singleChef.id}
                     singleChef={singleChef}
 
                 ></ChefCard>)
             }
          </div>
            
            </Col>
           </Row>
            
         </Container>
         <About></About>
         <Recipe></Recipe>
       </div>
    );
};

export default Home;