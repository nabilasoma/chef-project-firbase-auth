import React from 'react';
import './Home.css'
import { useLoaderData, useParams } from 'react-router-dom';
import ChefCard from '../chefCard/ChefCard';
import Banner from '../../banner/Banner';
import About from '../../about/About';
import Recipe from '../../recipe/Recipe';
import { Container, Row } from 'react-bootstrap';


const Home = () => {

  const { id } = useParams();
  console.log(id);

  const loadChef = useLoaderData();
  console.log("loadChef from home",loadChef);


  return (
    <div>
      <Banner></Banner>
      <Container className='mt-4'>
            <Row xs={1} md={2} lg={3} className="g-4">
              {
                loadChef.map(singleChef => <ChefCard key={singleChef.id}
                  singleChef={singleChef}

                ></ChefCard>)
              }
              </Row>
      </Container>
      <About></About>
      <Recipe></Recipe>
    </div>
  );
};

export default Home;