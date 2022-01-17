import React from 'react';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const {signinUsingGoogle} = useAuth()
    return (
        <div>
            <h1>Please Sign in</h1>
            <button onClick={signinUsingGoogle} className='btn btn-success'>Google Sign In</button>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
};

export default Login;