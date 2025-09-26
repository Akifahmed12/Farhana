import React from "react";

export default function Footer(){
  return (
    <footer className="footer" role="contentinfo">
      <div className="inner">
        <div>
          <img src="/assets/logo.svg" alt="logo" style={{height:36}} />
        </div>
        <div className="copyright">© 2025 FarhanaTajnim. All rights reserved.</div>
        <div style={{display:'flex',gap:12}}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#work">Work</a>
        </div>
      </div>
    </footer>
  );
}
