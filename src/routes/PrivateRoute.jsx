import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location); 


    if(loading){
        return <Spinner animation="border" variant="success" />
    }

    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: 'location'}} replace></Navigate>
};

export default PrivateRoute;