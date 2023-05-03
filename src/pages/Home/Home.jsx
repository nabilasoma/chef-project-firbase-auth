import React, { useEffect, useState } from 'react';
import './Home.css'
import { useLoaderData, useParams } from 'react-router-dom';
import ChefCard from '../chefCard/ChefCard';
import Banner from '../../banner/Banner';
import About from '../../about/About';
import Recipe from '../../recipe/Recipe';


const Home = () => {
   
    const {id} = useParams();
    console.log(id);

    const loadChef = useLoaderData();
    console.log(loadChef);

   
    return (
       <div>
        <Banner></Banner>
         <div className='container mt-4'>
            
            <div className='cardShow'>
            {
                 loadChef.map(singleChef => <ChefCard key={singleChef.id}
                     singleChef={singleChef}
 
                 ></ChefCard>)
             }
            </div>
            
         </div>
         <About></About>
         <Recipe></Recipe>
       </div>
    );
};

export default Home;