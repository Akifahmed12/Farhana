import React, {useState, useEffect} from "react";

const TESTIS = [
  {name:"Aisha Rahman", text:"Farhana led our student project with creativity and calm leadership. Her front-end skills turned our ideas into a beautiful, accessible website.", img:"/assets/project3.jpg"},
  {name:"Rifat Hossain", text:"Professional, punctual, and attentive to detail. Highly recommend for community projects.", img:"/assets/project4.jpg"},
  {name:"Sadia Chowdhury", text:"Great collaborator — excellent communicator and problem solver.", img:"/assets/project5.jpg"}
];

export default function Testimonials(){
  const [idx, setIdx] = useState(0);

  useEffect(()=>{
    const t = setInterval(()=> setIdx(i => (i+1)%TESTIS.length), 5000);
    return ()=> clearInterval(t);
  },[]);

  return (
    <>
      <h2 className="section-title">Testimonials</h2>
      <div style={{display:"flex",alignItems:"center",gap:20}}>
        <div className="testi-wrap" aria-live="polite">
          {TESTIS.map((t,i)=>(
            <div key={i} className="testi-card" style={{opacity: i===idx ? 1 : 0.18, transform: i===idx ? 'translateY(0)' : 'translateY(4px)', transition:'all .5s'}}>
              <img src={t.img} alt={`${t.name}`} style={{width:56,height:56,borderRadius:8,objectFit:'cover'}} />
              <p style={{marginTop:10,color:'var(--muted)'}}>{t.text}</p>
              <div className="testi-name">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
