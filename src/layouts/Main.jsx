import React from 'react';
import Header from '../shared/Header/Header';
import Footer from '../shared/footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
           <Header></Header>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;