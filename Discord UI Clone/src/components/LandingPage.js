import React from "react";
import '../../node_modules/font-awesome/css/font-awesome.css';
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="container">
      <div className="cover">
        <div className="center images">
          <img src={'./icons/center_bg_landing_header.svg'} alt="center-landing" />
        </div>
        <div className="navbar-container">
          <nav className="navbar">
            <a href="#landingPage" className="brand">
              <img className="dlogo" src="./icons/discordLogo.svg" alt="Discord-logo" />
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
            <img src='./icons/left_bg_landing_header.svg' alt="left-landing" />
          </div>
          <div className="right images">
            <img src='./icons/right_bg_landing_header.svg' alt="right-landing" />
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
            <div className="paragraph-mob">
              <p>...where you can belong to a school club, a gaming group, or a worldwide art communityWhere just you and a handful of friends can spend time together. A place that makes it easy. to talk every day and hang out more often.</p>  
            </div>
          </div>
          <div className="hero-btn">
            <button className="download btn"><img src="./icons/download-icon.png" alt="" className="download-img"/> <span className="btn-txt">Download for Windows</span> </button>
            <button className="open btn">Open Discord in your browser</button>
          </div>
        </div>
      </div>
      <div className="Body">
        <div className="invite">
          <img src="./icons/invite_only_landing.svg" alt="invite-img" className="invite-img"/>
          <div className="invite-text">
            <h2>Create an invite-only place where you belong</h2>
            <p>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
          </div>
        </div>
        <div className="easy">
          <img src="./icons/hanging_out_easy_landing.svg" alt="easy-img" className="easy-img-mob"/>
          <div className="easy-text">
            <h2>Where hanging out is easy</h2>
            <p>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>
          </div>
          <img src="./icons/hanging_out_easy_landing.svg" alt="easy-img" className="easy-img"/>
        </div>
        <div className="fandom">
          <img src="./icons/fandom_landing.svg" alt="fandom-img" className="fandom-img"/>
          <div className="fandom-text">
            <h2>From few to a fandom</h2>
            <p>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
          </div>
        </div>
        <div className="chillin">
          <div className="chillin-text">
            <h2>RELIABLE TECH FOR STAYING CLOSE</h2>
            <p>
              Low-latency voice and video feels like you’re in the same room.
              Wave hello over video, watch friends stream their games, or gather
              up and have a drawing session with screen share.
            </p>
          </div>
          <img src="./icons/just_chiling_landing.svg" alt="chillin-img" className="chillin-img" />
          <div className="chillin-foot">
            <div className="chillin-foot-img">
              <img src="../icons/tiny_stars_landing.svg" alt="chillin-foot-img" />
            </div>
            <h3>Ready to start your journey?</h3>
            <button className="download btn">
              <img src="./icons/download-icon.png" alt="" className="download-img" />{" "}
              <span className="btn-txt">Download for Windows</span>{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="main">
          <ul>
            <li>
              <h3>IMAGINE A PLACE</h3>
            </li>
            <li>
              <div className="lang">
                <img src="./icons/usa_flag.png" className="flag" alt="flag-img" />
                <p>English, USA</p>
              </div>
            </li>
            <li>
              <ul className="socials">
                <li className="twitter">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="socialIcon-38NB2e"
                  >
                    <path
                      fill="#ffffff"
                      d="M8.2177 20.2976C15.798 20.2976 19.9327 14.0329 19.9327 8.58261V8.05011C20.7362 7.46091 21.435 6.74089 22 5.92012C21.2567 6.26235 20.4637 6.48437 19.6507 6.57791C20.5139 6.06164 21.1597 5.24885 21.4675 4.2913C20.6598 4.76183 19.7822 5.10021 18.8677 5.29365C17.3053 3.64491 14.7069 3.56109 13.0415 5.10571C11.9701 6.10222 11.5157 7.59694 11.8512 9.02114C8.54594 8.85772 5.46574 7.29769 3.37823 4.72983C2.28095 6.60789 2.84519 9.01622 4.66249 10.2114C4.00661 10.1858 3.36464 10.0146 2.78309 9.71026V9.7729C2.78257 11.7293 4.15628 13.417 6.07204 13.8136C5.46884 13.9751 4.83671 13.9965 4.22396 13.8763C4.76475 15.5538 6.31437 16.7003 8.07674 16.7267C6.62377 17.8749 4.82287 18.4936 2.97103 18.4808C2.65779 18.4808 2.31323 18.4495 2 18.4182C3.84433 19.6513 6.0148 20.3057 8.23336 20.2976"
                    ></path>
                  </svg>
                </li>
                <li>
                  <img src="./icons/instagram_icon.svg" alt="insta-icn" />
                </li>
                <li>
                  <img src="./icons/facebook_icon.svg" alt="fb-icn" />
                </li>
                <li>
                  <img src="./icons/youtube_icon.svg" alt="yt-icn" />
                </li>
              </ul>
            </li>
          </ul>
          <div className="foot-list">
            <div className="mob-list">
              <ul>
                <li className="Top-foot">Product</li>
                <li className="list">Download</li>
                <li className="list">Nitro</li>
                <li className="list">Status</li>
              </ul>
              <ul>
                <li className="Top-foot">Company</li>
                <li className="list">About</li>
                <li className="list">Jobs</li>
                <li className="list">Branding</li>
                <li className="list">Newsroom</li>
              </ul>
            </div>
            <div className="mob-list">
              <ul>
                <li className="Top-foot">Resources</li>
                <li className="list">College</li>
                <li className="list">Support</li>
                <li className="list">Safety</li>
                <li className="list">Blog</li>
                <li className="list">Feedback</li>
                <li className="list">Developers</li>
                <li className="list">StreamKit</li>
              </ul>
              <ul>
                <li className="Top-foot">Policies</li>
                <li className="list">Terms</li>
                <li className="list">Privacy</li>
                <li className="list">Cookie Settings</li>
                <li className="list">Guidelines</li>
                <li className="list">Acknowledgements</li>
                <li className="list">Licenses</li>
                <li className="list">Moderation</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="rule" />
        <div className="foot-end">
          <a href="#landingPage" className="foot-brand">
            <img className="dlogof" src='discordLogob.svg'alt="Discord-logo" />
            <span className="textLogof">Discord</span>
          </a>
          <button className="signup">Sign up</button>
        </div>
      </div>
    </div>
  );
}
