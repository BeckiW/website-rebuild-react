import React from "react";
import "./style.css";

class Hero extends React.Component {
  render() {
    const { image, alt } = this.props;
    return (
      <div>
        <img className="hero" src={image} alt={alt} />
      </div>
    );
  }
}

export default Hero;
