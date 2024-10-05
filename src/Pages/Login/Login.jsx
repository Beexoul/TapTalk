import React, { useState } from 'react';
import './Login.css';
import assets from '../../assets/assets.js';

const Login = () => {
  const [currState, setCurrState] = useState("Sign up");

  const toggleState = () => {
    setCurrState((prevState) => (prevState === "Sign up" ? "Login" : "Sign up"));
  };

  return (
    <div className='login'>
      <img src={assets.logo_icon} alt="Logo" className='logo' />
      <form className='login-form'>
        <h2>{currState}</h2>
        {currState === "Sign up" && (
          <input type="text" placeholder='Username' className='form-input' required />
        )}
        <input type="email" placeholder='Email Address' className='form-input' required />
        <input type="password" placeholder='Password' className='form-input' required />
        <button type='submit'>{currState === "Sign up" ? "Create account" : "Login now"}</button>
        <div className="login-term">
          <input type="checkbox" required />
          <p>Agree to terms of use and privacy policy</p>
        </div>
        <div className="login-forgot">
          <p className="login-toggle">
            {currState === "Sign up" 
              ? "Already have an account? " 
              : "Don't have an account? "}
            <span onClick={toggleState} style={{ cursor: 'pointer', color: 'blue' }}>
              {currState === "Sign up" ? "Log In" : "Sign Up"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
