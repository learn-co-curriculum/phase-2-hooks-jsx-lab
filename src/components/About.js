import React from "react";
import { image } from "../data/data";

function About() {
  return(
     <div id="about">
      <h2>About Me</h2>;
      <p>I am a fullstack Web Developer</p>;
      <img src={image} alt="I made this"></img>
      About</div>
  )
}

export default About;
