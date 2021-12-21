import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkedAlt, faPhoneVolume
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
           
            <div className="col-md-5 col-12">
              <div className="">
              <h1>Hitup<span className = "text-warning">.</span></h1>
                <div className="phone d-flex align-items-center">
                  <div className="footer-phone-icon me-3">
                    <FontAwesomeIcon icon={faPhoneVolume} />
                  </div>
                  <div>
                    <h5>+880 1234 56789</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center">
                  <div className="footer-phone-icon me-3">
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                  </div>
                  <div>
                    <p>
                      42/12 J.N.Shah Road, Lalbagh, Dhaka<br />
                      Lily Tower, 3th Floor, Kellarmor, Lalbagh <br />
                        Dhaka-1211, Bangladesh.
                    </p>
                  </div>
                </div>
                <p className="mt-3">
                  <small>Hitup- Build Your Body. © All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-2 col-12">
              <div className="footer-menu-container">
                <ul>
                  <li className="footer-menu">Home</li>
                  <li className="footer-menu">Services</li>
                  <li className="footer-menu"> About us</li>
                  <li className="footer-menu">Contact us</li>
                </ul>
              </div>
            </div>

            <div className="col-md-5 col-12">
              <div className="text-start">
                <p className="mt-4 ">
                  <small>
                  Hitup Gym is a popular and faithful Gym at Dhaka in Bangladesh. Our slogan is "Build Your Body". To stay fit and healty GYM is the finest and best way. Because in our Gym under a roof you will get huge collection of gym instruments, Experienced Trainer, Heath Consultent, necessery suppliments and so on. SILVER GYM is fully Air Conditining
                  </small>
                </p>
                <div className="icons-container d-flex text-center ">
                  <div className="icon">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;