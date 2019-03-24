import React, { Component } from 'react';
import "./style.css"

class Header extends React.Component {

  render() {
    return (
      <header className="page-header">
      <div class="logo">
        <img src="./ShepardConsultingLogoV2.png" />

        </div>
        <div className="navigation">
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="">What is data protection?</a></li>
              <li><a href="">What is GDPR?</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">Consultancy</a></li>
              <li><a href="">Freedom of information</a></li>
              <li><a href="">News</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="social">
          <ul>
            <li><a href="https://twitter.com/Shepconsult1" target="_blank"><img src="/twitter-64.png" /></a></li>
          </ul>
        </div>
      </header>

    )
  }

}


export default Header
