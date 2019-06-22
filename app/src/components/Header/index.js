import React, { Component } from "react";
import "./style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
import DataProtection from "../dataProtection";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <div className="menu__header">
          <div className="menu__header__title">Shepard Consulting</div>
          <div className="menu__header__description">
            Data Protection Specialist
          </div>

          <img className="logo" src="/ShepardConsultingLogoV2.png" alt="Logo" />
        </div>
        <div className="container">
          <nav>
            <ul className="menu__list">
              {" "}
              <li className="menu__item">
                <FontAwesomeIcon icon="stroopwafel" />
                <a href="/">Welcome</a>
              </li>
              <li className="menu__item">
                <a href="/data_protection/">What is Data Protection?</a>
              </li>
              <li className="menu__item">
                <a href="/my-projects/">What is GDPR?</a>
              </li>
              <li className="menu__item">
                <a href="/my-projects/">Services</a>
              </li>
              <li className="menu__item">
                <a href="/my-projects/">Consultancy</a>
              </li>
              <li className="menu__item">
                <a href="/my-projects/">Freedom of Information</a>
              </li>
              <li className="menu__item">
                <a href="/my-projects/">News</a>
              </li>
              {/* <li className="menu__item">
              <a href="/contact-me/">Contact</a>
            </li> */}
            </ul>
          </nav>
        </div>
        <div>
          <footer>
            <div className="footer-content">
              <div>
                <p className="contact">
                  {/* Charlotte Shepard <br /> */}
                  <a href="/contact-me/" title="Contact Becki Wordsworth">
                    Contact Us
                  </a>
                </p>
              </div>

              <div className="social">
                <ul>
                  <li>
                    <a
                      href="https://twitter.com/BeckiWordsworth"
                      target="_blank"
                    >
                      <img src="/twitter-64.png" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/beckiwordsworth/"
                      target="_blank"
                    >
                      <img src="/linkedin-64.png" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

//   render() {
//     return (
//       <header className="page-header">
//       <div class="logo">
//         <img src="./ShepardConsultingLogoV2.png" />

//         </div>
//         <div className="navigation">
//           <nav>
//             <ul>
//               <li><a href="/">Home</a></li>
//               <li><a href="">What is data protection?</a></li>
//               <li><a href="">What is GDPR?</a></li>
//               <li><a href="">Services</a></li>
//               <li><a href="">Consultancy</a></li>
//               <li><a href="">Freedom of information</a></li>
//               <li><a href="">News</a></li>
//               <li><a href="">Contact</a></li>
//             </ul>
//           </nav>
//         </div>
//         <div className="social">
//           <ul>
//             <li><a href="https://twitter.com/Shepconsult1" target="_blank"><img src="/twitter-64.png" /></a></li>
//           </ul>
//         </div>
//       </header>

//     )
//   }

// }

export default Menu;
