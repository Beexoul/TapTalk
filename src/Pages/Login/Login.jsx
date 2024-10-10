import React, { useState } from 'react';
import './Login.css';
import assets from '../../assets/assets.js';
import { signup, login } from '../../config/Firebase.js';

const Login = () => {
  const [currState, setCurrState] = useState("Sign up");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false); 

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (currState === "Sign up") { 
      if (agreedToTerms) {
        signup(userName, email, password);
      } else {
        alert("You must agree to the terms and privacy policy to sign up.");
      }
    } else {
      login(email,password)
    }
  }

  const toggleState = () => {
    setCurrState((prevState) => (prevState === "Sign up" ? "Login" : "Sign up"));
    setUserName("");
    setEmail("");
    setPassword("");
    setAgreedToTerms(false); 
  }

  return (
    <div className='login'>
      <img src={assets.logo_big} alt="Logo" className='logo' />
      <form onSubmit={onSubmitHandler} className='login-form'>
        <h2>{currState}</h2>
        {currState === "Sign up" && (
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            placeholder='Username'
            className='form-input'
            required
          />
        )}
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder='Email Address'
          className='form-input'
          required
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder='Password'
          className='form-input'
          required
        />
        {currState === "Sign up" && (
          <div className="login-term">
            <input
              type="checkbox"
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              checked={agreedToTerms}
              required
            />
            <p>Agree to terms of use and privacy policy</p>
          </div>
        )}
        <button type='submit'>
          {currState === "Sign up" ? "Create account" : "Login now"}
        </button>
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
