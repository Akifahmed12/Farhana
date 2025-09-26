import React, {useRef, useEffect, useState} from "react";

const WORKS = [
  {title:"Campus Event Portal", desc:"A responsive portal built to manage event schedules, registration, and volunteer coordination.", img:"/assets/project1.jpg", link:"#"},
  {title:"Volunteer Connect", desc:"Landing site for matching volunteers with local community tasks and opportunities.", img:"/assets/project2.jpg", link:"#"},
  {title:"Portfolio Redesign", desc:"An accessible, high-performance portfolio with animated micro-interactions.", img:"/assets/project3.jpg", link:"#"},
  {title:"Fundraiser Microsite", desc:"Campaign-focused microsite with donation CTA and progress tracker.", img:"/assets/project4.jpg", link:"#"},
  {title:"Interactive Workshop Hub", desc:"Resource hub for workshop materials, signups, and interactive tutorials.", img:"/assets/project5.jpg", link:"#"}
];

export default function Work(){
  const containerRef = useRef();
  const [visible, setVisible] = useState(0);

  useEffect(()=>{
    const panels = Array.from(containerRef.current.querySelectorAll('.work-panel'));
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          const idx = panels.indexOf(entry.target);
          setVisible(idx);
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {threshold: 0.55});

    panels.forEach(p => obs.observe(p));
    return ()=> obs.disconnect();
  },[]);

  return (
    <div ref={containerRef}>
      {WORKS.map((w,i)=>(
        <section key={i} className="work-panel" aria-label={`Work ${i+1}`}>
          <div className="work-bg" style={{
            backgroundImage:`url("${w.img}")`,
            opacity: visible === i ? 1 : 0,
            transform: visible === i ? 'scale(1)' : 'scale(1.06)'
          }} />
          <div className="work-overlay" style={{zIndex:2}}>
            <h3 className="work-title">{w.title}</h3>
            <p className="work-desc">{w.desc}</p>
            <a className="work-btn" href={w.link}>View Work</a>
          </div>
        </section>
      ))}
    </div>
  );
}
