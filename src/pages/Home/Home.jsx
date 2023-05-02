import React, { useEffect, useState } from 'react';
import ChefCard from '../chefCard/ChefCard';
import './Home.css'


const Home = () => {
    const [chefData, setChefData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allChef')
            .then(res => res.json())
            .then(data => setChefData(data.chefs))
            .catch(error => console.log(error))
    }, [])


    console.log(chefData);
    return (
        <div className='container mt-4'>

           <div className='cardShow'>
           {
                chefData.map(singleChef => <ChefCard key={singleChef.id}
                    singleChef={singleChef}

                ></ChefCard>)
            }
           </div>

        </div>
    );
};

export default Home;