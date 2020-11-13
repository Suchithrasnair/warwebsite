import React from 'react';
import Footer from './Footer';
import Logo from './imageabout.jpg'
import Navbarupdated from './Navbarupdated';

const About = () => {
    return (
       
            <div className="about1">
                <Navbarupdated/>
              <div class="container">
                <div class="row align-items-center my-5">
                  {/* <div class="col-lg-7">
                    <img
                      class="img-fluid rounded mb-4 mb-lg-0"
                      src="http://placehold.it/900x400"
                      alt=""
                    />
                  </div> */}
                  <div class="image-aboutus-banner">
           <div class="container" id="about">
            <div class="row">
                <div class="col-md-12">
                 <h1 class="lg-text">About Us</h1>
                  {/* <div class="col-lg-5">
                    <h1 class="font-weight-light">About</h1> */}
                   
                    <p>
                    PlayerUnknown's Battlegrounds (PUBG) is an online multiplayer battle royale game developed and published by PUBG Corporation, a subsidiary of South Korean video game company Bluehole. ... A free-to-play mobile game version for Android and iOS was released in 2018, in addition to a port for the PlayStation 4. WAR is a PUBG clan which we are created and we are organizing daily room matches in it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div></div>
            <Footer/>
            </div>
          );
}
export default About;