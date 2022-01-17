import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className="banner-info">
                <h1>WELCOME TO <br /> THE SPORTS PLAYER WORLD</h1>
               <Link to='/allplayers'> <button className='btn'>Explore</button></Link>
              
            </div>
        </div>
    );
};

export default Banner;