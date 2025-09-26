import React from "react";

export default function Contact(){
  return (
    <>
      <div className="section-title">Contact</div>
      <div className="contact-full">
        <div className="contact-card">
          <h2>Let’s Build Something Great Together.</h2>
          <form action="mailto:farhana@example.com" method="post" encType="text/plain">
            <div className="form-row">
              <input className="input" name="name" placeholder="Your name" required />
              <input className="input" name="email" type="email" placeholder="Email address" required />
            </div>
            <div style={{marginTop:12}}>
              <input className="input" name="subject" placeholder="Subject" />
            </div>
            <div style={{marginTop:12}}>
              <textarea className="textarea" name="message" placeholder="Your message" required />
            </div>
            <div style={{marginTop:12, display:'flex', gap:12}}>
              <button className="cta" type="submit">Send Message</button>
              <a className="work-btn" href="mailto:farhana@example.com">Email directly</a>
            </div>
          </form>

          <div className="social-rows">
            <a href="#" aria-label="LinkedIn" className="work-btn">LinkedIn</a>
            <a href="#" aria-label="GitHub" className="work-btn">GitHub</a>
            <a href="#" aria-label="Facebook" className="work-btn">Facebook</a>
            <a href="#" aria-label="Instagram" className="work-btn">Instagram</a>
          </div>
        </div>
      </div>
    </>
  );
}
