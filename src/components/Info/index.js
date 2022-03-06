import React from 'react'
import './index.css';

export default function Info() {
  return (
    <div id="info-div">
        <img id="image" src={require("../../images/steve-eren.png")} alt="steve-eren"/>
        <div id="info-section">
            <h1 id="name">Eren Jeager</h1>
            <p id="job-title">Attack Titan</p>
            <section id="button-section">
                <button id="email-button">Email</button>
                <button id="linkedin-button">LinkedIn</button>
            </section>    
        </div>
    </div>
  );
}
