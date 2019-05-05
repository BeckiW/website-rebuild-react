import React, { Component } from "react";
import "./style.css";

class Welcome extends React.Component {
  render() {
    return (
      <div className="content-padding">
        <div class="hero" />
        <img
          class="hero"
          src="/data-protection-faqs-519801490.jpg"
          alt="Logo"
        />

        <div>
          <h1>Welcome!</h1>

          <section className="welcome-section">
            <span>
              {" "}
              Bad data management and lack of protection can lead to
              inefficiencies in organisation, reputational damage and
              potentially large fines. Shepard Consulting specialise in data
              protection and information management consulting, training and
              managed services. Data is one of the biggest assets to your
              organisation, Shepard Consulting can help you to:
              <ul>
                <li>Make the most of data in your business</li>
                <li>Protect your data</li>
                <li>Comply with the law</li>
              </ul>
            </span>
          </section>
        </div>
      </div>
    );
  }
}

export default Welcome;
