import React, {useEffect} from "react";

const SKILLS = [
  {name:"HTML", pct:95},
  {name:"CSS", pct:90},
  {name:"JavaScript", pct:82},
  {name:"React", pct:75},
  {name:"Tailwind", pct:80},
  {name:"3D Web", pct:60}
];

function Circle({pct}){
  const r = 44;
  const c = 2*Math.PI*r;
  const offset = c - (pct/100)*c;
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" className="progress">
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0%" stopColor="#923FFF"/>
          <stop offset="50%" stopColor="#583FFF"/>
          <stop offset="100%" stopColor="#7DBFFF"/>
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r={r} stroke="rgba(255,255,255,0.06)" strokeWidth="10" fill="none"/>
      <circle cx="50" cy="50" r={r} stroke="url(#g1)" strokeWidth="10" strokeDasharray={`${c}`} strokeDashoffset={offset} strokeLinecap="round" fill="none"/>
      <text x="50" y="56" textAnchor="middle" fontSize="14" fill="white" fontWeight="700">{pct}%</text>
    </svg>
  );
}

export default function Skills(){
  useEffect(()=>{
    document.querySelectorAll(".skill-card").forEach((el,i)=>{
      setTimeout(()=> el.classList.add("visible"), 80*i);
    });
  },[]);

  return (
    <>
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {SKILLS.map(s=>(
          <div key={s.name} className="skill-card fade-in">
            <div className="progress-circle">
              <Circle pct={s.pct} />
            </div>
            <div className="skill-name">{s.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}
