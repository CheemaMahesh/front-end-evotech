import React, { useState } from "react";
import './Login.css';
import {logins} from '../api';

const Login = ({setUser,setIsLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can perform further actions like validation, API calls, etc.
    console.log("Submitted:", { email, password });
     const newRes=await logins({ email, password });
     if(email === 'admin@email.com' && password === 'SurveyAdmin'){
      setUser(true);
      setEmail('');
      setPassword('');
     }else{
      alert("Email or Password is incorrect")
     }
    
  };

  return (
    <div className="login-container">
      <h2>Login as Admin</h2>
      <p >use below longin credentials </p>
      <p className="p"><b>Email:</b>admin@email.com</p>
      <p className="p"><b>Password:</b>SurveyAdmin</p>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="input-group">
          <input type="submit" value="Login" />
        </div>
      </form>
      <button className='buttons' onClick={()=>setIsLogin(false)}>Survey-Page</button>

    </div>
  );
};

export default Login;
