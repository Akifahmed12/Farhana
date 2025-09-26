import React from "react";

export default function Hero(){
  return (
    <div className="hero-inner">
      <div className="hero-left">
        <p className="hi">Hi, I’m Farhana —</p>
        <h1 className="title">
          <span className="gradient-text">undergraduate student of UAP, a Dreamer, Hardworker, Achiever</span>
        </h1>
        <p className="tag">Building immersive, modern, and high-performance websites.</p>
        <a className="cta" href="#experience">View My Experience</a>
      </div>

      <div className="hero-right">
        <div className="portrait-frame" aria-hidden="true">
          <img src="/assets/portrait_with_glow.png" alt="Portrait of Farhana Tajnim" />
        </div>
      </div>
    </div>
  );
}
