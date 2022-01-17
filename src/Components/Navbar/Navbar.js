import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Navbar.css'

const Navbar = () => {
  const{user,logOut} = useAuth()
    return (
        <div>
            <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#sports">
    <img src="https://seeklogo.com/images/S/sports-logo-BB73BFD7B1-seeklogo.com.png" alt="" width="40px" height="30px" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link className='text-white me-2 linker' to='/home'>Home</Link>
        </li>
        <li class="nav-item">
          <Link className='text-white me-2 linker' to="/allplayers">Allplayers</Link>
        </li>
        <li className='nav-item'>
       {
         user.email?
         <Link onClick={logOut} className='text-white linker' to='/home'>
          LogOut
         </Link>
         :
         <Link className='text-white linker' to='login'>
         Login
         </Link>
       }
       {/* {
         user.email&&
         <p className='text-white'>{user.displayName}</p>
       } */}
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;