import React from "react";

export default function Header(){
  return (
    <header className="header" role="banner" aria-label="Main header">
      <div className="brand">
        <img src="/assets/logo.svg" alt="FarhanaTajnim logo" />
      </div>
      <nav className="nav" role="navigation" aria-label="Primary">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
