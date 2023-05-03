import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const { error, status } = useRouteError();
    console.log(error.massage);
    return (
        <div>
            <div className="m-auto text-center">
                {error.massage}
                <h1 className="m-auto text-red-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-60 h-60 text-center m-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                </h1>
                <p className="text-2xl">404</p>
                <h1 className="text-3xl font-bold">Oops!</h1>
                <p className="text-xl text-red-600 mb-4">Sorry, an unexpected error has occurred.</p>
                <Link className="rounded px-4 py-2 bg-red-400 text-white font-bold" to='/'>Back To Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;