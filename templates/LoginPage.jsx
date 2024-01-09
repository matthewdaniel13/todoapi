import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin({ username, password });
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
          @import url('https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css');

          #alert {
            width: 80vw;
            height: 50px;
            padding: 15px;
            right: 10vw;
            line-height: 20px;
            border-radius: 4px;
            top: 90px;
            position: absolute;
            z-index: 10;
          }

          #close {
            font-size: 25px;
            position: absolute;
            top: 10px;
            right: 10px;
          }
        `}
      </style>

      <div className="navbar-fixed">    
        <nav className="blue">
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo center">Login Page</a>
            <ul id="nav-mobile" className="right">
              <li><a href="./signup">Signup</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <div id="root">
      <main className="container">
          <form className="card col s12" id="loginForm" method="POST" action="/login">
            <div className="row">
              <div className="input-field col s12">
                <input placeholder="Placeholder" name="username" type="text" className="validate" />
                <label htmlFor="first_name">Username</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input name="password" type="password" className="validate" />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="card-action row">
              <input type="submit" className="blue text-white btn right" />
            </div>
          </form>
        </main>
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </>
  );
};

export default LoginPage;
