import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div class="">

  <footer class="bg-primary text-center text-lg-start text-white">
  
    <div class=" container p-4">
    
      <div class="row my-4">
    
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">

          <div class="rounded-3 bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-3 mx-auto" style={{"width": "150px; height: 150px"}}>
            <img src="https://seeklogo.com/images/S/sports-logo-BB73BFD7B1-seeklogo.com.png" height="70" alt=""
                 loading="lazy" />
          </div>

          <p class="text-center">This is our sportsworld website.Here you will see our most popular players in the world</p>

          <ul class="list-unstyled d-flex flex-row justify-content-center">
            <li>
              <a class="text-white px-2" href="#!">
                <i class="fab fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a class="text-white px-2" href="#!">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a class="text-white ps-2" href="#!">
                <i class="fab fa-youtube"></i>
              </a>
            </li>
          </ul>

        </div>
       
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4">Our Mission</h5>

          <ul class="list-unstyled">
            <li class="mb-2">
              <a href="#!" class="text-white">home</a>
            </li>
            <li class="mb-2">
              <a href="#!" class="text-white">Newsletter</a>
            </li>
            <li class="mb-2">
              <a href="#!" class="text-white">About Us</a>
            </li>
            <li class="mb-2">
              <a href="#!" class="text-white">Contact Us</a>
            </li>
           
          </ul>
        </div>
       
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4">Our vision</h5>

          <ul class="list-unstyled">
            <li class="mb-2">
              <a href="#services" class="text-white">Services</a>
            </li>
            <li class="mb-2">
              <a href="#customers" class="text-white">Our customers</a>
            </li>
            <li class="mb-2">
              <a href="#stat" class="text-white">Statistic data</a>
            </li>
            <li class="mb-2">
              <a href="#!" class="text-white">Jobs</a>
            </li>
          </ul>
        </div>


        
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4">Contact</h5>

          <ul class="list-unstyled">
            <li>
              <p><i class="fas fa-map-marker-alt pe-2"></i>Warsaw, 57 Street, Poland</p>
            </li>
            <li>
              <p><i class="fas fa-phone pe-2"></i>+ 01 234 567 89</p>
            </li>
            <li>
              <p><i class="fas fa-envelope pe-2 mb-0"></i>contact@example.com</p>
            </li>
          </ul>
        </div>
 
      </div>
 
    </div>


  
    <div class="text-center p-3" style={{"background-color": "rgba(0, 0, 0, 0.2)"}}>
      <p>© 2020 Copyright: All rights reserved by players</p>
     
    </div>
  
  </footer>

</div>

    );
};

export default Footer;