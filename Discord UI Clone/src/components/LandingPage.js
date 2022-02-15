import React from "react";
import Logo from "../icons/discordLogo.svg";
import Download from "../icons/download-icon.png"
import '../../node_modules/font-awesome/css/font-awesome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
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
              <div className="">
              </div>
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
            </div>
          </nav>
          <button className="login">Login</button>
        </div>
        <div className="coverImages">
          <div className="left images">
            <img src={Limage} alt="left-landing" />
          </div>
          <div className="right images">
            <img src={Rimage} alt="right-landing" />
          </div>
        </div>
        <div className="mid-content">
          <div className="text">
            <div className="headline">
              <h2>IMAGINE A PLACE...</h2>
            </div>
            <div className="paragraph">
              <p className="pfirst">...where you can belong to a school club, a gaming group, or a worldwide art community. </p>
              <p className="psecond">Where just you and a handful of friends can spend time together. A place that makes it easy</p>
              <p className="pthird">to talk every day and hang out more often.</p>
            </div>
          </div>
          <div className="hero-btn">
            <button className="download btn"><img src={Download} alt="" className="download-img"/> Download for Windows</button>
            <button className="open btn">Open Discord in your browser</button>
          </div>
        </div>
      </div>
      <FontAwesomeIcon icon="fa-solid fa-arrow-down-to-bracket" />
      <FontAwesomeIcon icon="faCoffee" />
    </div>
  );
}
