import React from "react";

const EXPS = [
  {title:"Volunteer — Community Web Projects", desc:"Organized website builds for campus initiatives; led design and deployment."},
  {title:"University Organizer — Event Management", desc:"Coordinated teams, timelines, and volunteer recruitment."},
  {title:"Team Lead — Marketing & Outreach", desc:"Led communications and outreach for project launches."}
];

export default function Experience(){
  return (
    <>
      <h2 className="section-title">Experience</h2>
      <div className="exp-grid">
        {EXPS.map((e,i)=>(
          <article key={i} className="exp-card fade-in" aria-labelledby={`exp-${i}`}>
            <h3 id={`exp-${i}`}>{e.title}</h3>
            <p style={{color:"var(--muted)"}}>{e.desc}</p>
          </article>
        ))}
      </div>
    </>
  );
}
