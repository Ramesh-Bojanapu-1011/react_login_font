/* eslint-disable no-unused-vars */
// import logo from './logo.svg';

import { useState } from "react";

import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const handleTabClick = (tab) => {
    setIsLogin(tab === 'login');
  };

  return (
    <div className="form-structor">
      <div className={`signup ${isLogin ? 'slide-up' : ''}`}>
        <h2 className="form-title" onClick={() => handleTabClick('signup')}><span>or</span>Sign up</h2>
        <div className="form-holder">
          <input type="text" className="input" placeholder="Name" />
          <input type="email" className="input" placeholder="Email" />
          <input type="password" className="input" placeholder="Password" />
        </div>
        <button className="submit-btn">Sign up</button>
      </div>
      <div className={`login ${isLogin ? '' : 'slide-up'}`}>
        <div className="center">
          <h2 className="form-title" onClick={() => handleTabClick('login')}><span>or</span>Log in</h2>
          <div className="form-holder">
            <input type="email" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Password" />
          </div>
          <button className="submit-btn">Log in</button>
        </div>
      </div>
    </div>
  );
}

export default App;
