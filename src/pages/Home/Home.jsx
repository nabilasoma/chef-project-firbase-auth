import React, { useEffect, useState } from 'react';
import './Home.css'
import { useLoaderData, useParams } from 'react-router-dom';
import ChefCard from '../chefCard/ChefCard';


const Home = () => {
   
    const {id} = useParams();
    console.log(id);

    const loadChef = useLoaderData();
    console.log(loadChef);

   
    return (
        <div className='container mt-4'>
            
           <div className='cardShow'>
           {
                loadChef.map(singleChef => <ChefCard key={singleChef.id}
                    singleChef={singleChef}

                ></ChefCard>)
            }
           </div>

        </div>
    );
};

export default Home;