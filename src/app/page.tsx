'use client';

import React from 'react';

export default function Home() {
  const [isLogin, setIsLogin] = React.useState(true);

  const handleTabClick = (tab: string) => {
    setIsLogin(tab === 'login');
  };
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    // This effect runs only on the client side
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <>
          {' '}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
            }}
          >
            <div className="form-structor">
              <div className={`signup ${isLogin ? 'slide-up' : ''}`}>
                <h2
                  className="form-title"
                  onClick={() => handleTabClick('signup')}
                >
                  <span>or</span>Sign up
                </h2>
                <div className="form-holder">
                  <input type="text" className="input" placeholder="Name" />
                  <input type="email" className="input" placeholder="Email" />
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" className="submit-btn">
                  Sign up
                </button>
              </div>
              <div className={`login ${isLogin ? '' : 'slide-up'}`}>
                <div className="center">
                  <h2
                    className="form-title"
                    onClick={() => handleTabClick('login')}
                  >
                    <span>or</span>Log in
                  </h2>
                  <div className="form-holder">
                    <input type="email" className="input" placeholder="Email" />
                    <input
                      type="password"
                      className="input"
                      placeholder="Password"
                    />
                  </div>
                  <button type="submit" className="submit-btn">
                    Log in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
