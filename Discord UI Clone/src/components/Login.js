import React from 'react';
import "./Login.css";

function Login() {
  return (
    <>
      <div className="login-container">
        <div className='bg'>
          <img src="./icons/login.svg" alt="login-svg" />
        </div>
        <div className='box-wrap'>
          <div className='box'>
            <div className="left">
              <div className="head">
                <h3 className="white ginto">Welcome back!</h3>
                <p>We're so excited to see you again!</p>
              </div>
              <div className="body">
                <label htmlFor="e-mail">EMAIL OR PHONE NUMBER</label>
                <input className='e-mail' type="text" />
                <label htmlFor="pwd">PASSWORD</label>
                <input className='pwd' type="text" />
                <small class=""><a href="/">Forgot your password?</a></small>
                <button>Login</button>
                <small class="">Need an account? <a href="/">Register</a></small>
              </div>
            </div>
            <div className="right">
              <div className='qr'>
                <img src="./icons/qr.png" alt="qr" />
              </div>
              <div className="content">
              <h3 className='white ginto'>Log in with QR Code</h3>
              <p>Scan this with the <strong>Discord mobile app</strong> to log in instantly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Login