import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img className='w-50' src="https://media.istockphoto.com/vectors/error-404-vector-id538038858" alt="" />
            <h1 className='text-danger'>Error 404! page not found</h1>
            <Link to='/home'><button className='btn btn-success'>Go Back Home</button></Link>
        </div>
    );
};

export default NotFound;