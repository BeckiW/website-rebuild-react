import React, { Component } from "react";
import "./style.css";
import Hero from "../Hero";

class dataProtection extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <Hero image={"/data-protection-faqs-519801490.jpg"} alt={"Logo"} />

        <div>
          <h1>Welcome!</h1>

          <section className="welcome-section content-padding">
            <span>
              {" "}
              Every organisation in the UK that processes personal data
              electronically is required to abide by data protection
              regulations. These are made up of the Data Protection Act 2018,
              the Digital Economy Act and the GDPR. These regulations set out
              how organisations should look after personal data, there are also
              rules around CCTV and marketing. There are strong penalties for
              those organisations that do not abide by these rules which are
              regulated by the Information Commissioners Office. The
              reputational damage of a breach can be even more detrimental to
              business. People are becoming increasingly aware of privacy and
              privacy rules and much more protective of their personal data. It
              is important that businesses and other organisations show they
              also take personal privacy seriously and are not only aware of the
              regulations in place but are proactive in implementing steps to
              comply.
            </span>
          </section>
        </div>
      </div>
    );
  }
}

export default dataProtection;
