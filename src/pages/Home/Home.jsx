import React, { useEffect, useState } from 'react';
import './Home.css'
import { useLoaderData, useParams } from 'react-router-dom';
import ChefCard from '../chefCard/ChefCard';


const Home = () => {
    // const [chefData, setChefData] = useState([]);
    const {id} = useParams();
    console.log(id);

    const loadChef = useLoaderData();
    console.log(loadChef);

    // useEffect(() => {
    //     fetch('http://localhost:5000/allChef')
    //         .then(res => res.json())
    //         .then(data => setChefData(data.chefs))
    //         .catch(error => console.log(error))
    // }, [])


    // console.log(chefData);
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