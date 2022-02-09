import React from "react";
import Logo from "../icons/discordLogo.svg";
import Limage from "../icons/left_bg_landing_header.svg";
import Rimage from "../icons/right_bg_landing_header.svg";
import Mimage from "../icons/center_bg_landing_header.svg";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="container">
      <div className="cover">
        <div className="center images">
          <img src={Mimage} alt="center-landing" />
        </div>
        <div className="navbar-container">
          <nav className="navbar">
            <a href="#landingPage" className="brand">
              <img className="dlogo" src={Logo} alt="Discord-logo" />
              <span className="textLogo">Discord</span>
            </a>
            <div className="list">
              <li><a href="#download">Download</a></li>
              <li><a href="#nitro">Nitro</a></li>
              <li><a href="#safety">Safety</a></li>
              <li><a href="#support">Support</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#careers">Careers</a></li>
              <button className="login">Login</button>
            </div>
          </nav>
        </div>
        <div className="coverImages">
          <div className="left images">
            <img src={Limage} alt="left-landing" />
          </div>
          <div className="right images">
            <img src={Rimage} alt="right-landing" />
          </div>
        </div>
      </div>
    </div>
  );
}
