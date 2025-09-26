import React from "react";

export default function About(){
  return (
    <>
      <h2 className="section-title">About</h2>
      <div className="about-grid">
        <div style={{flex:"0 0 360px"}}>
          <div style={{width:360}}>
            <div className="portrait-frame" style={{width:360,height:360}}>
              <img src="/assets/portrait_with_glow.png" alt="Farhana portrait" style={{width:312,height:312}} />
            </div>
          </div>
        </div>
        <div style={{flex:1}}>
          <p style={{color:"var(--muted)",fontSize:16}}>
            I’m Farhana Tajnim — a volunteer-driven web developer focused on building immersive, modern, and high-performance websites that create memorable experiences. I specialize in responsive front-end development, accessibility-aware interfaces, and teamwork-driven projects at university and community initiatives.
          </p>

          <div className="about-cards">
            <div className="highlight">
              <h4>Experience</h4>
              <p>Volunteer & university-level organizing, team lead, event coordination.</p>
            </div>
            <div className="highlight">
              <h4>Skills</h4>
              <p>HTML, CSS, JavaScript, React, Tailwind, 3D Web.</p>
            </div>
            <div className="highlight">
              <h4>Specialties</h4>
              <p>Responsive design, performance optimization, accessibility.</p>
            </div>
            <div className="highlight">
              <h4>Achievements</h4>
              <p>Led 3+ campus projects; recognized for community contribution.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
