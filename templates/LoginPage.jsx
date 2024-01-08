import React, { useState } from 'react';
import './styles.css'; 

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin({ username, password });
  };

  return (
    <>
      <div className="navbar-fixed">    
        <nav className="blue">
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo center">Login Page</a>
            <ul id="nav-mobile" className="right">
              <li><a href="/signup">Signup</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <div id="content">
        <main className="container" style={{ marginTop: '100px' }}>
          <form className="card col s12" id="loginForm" method="POST" action="/login" style={{ padding: '1em' }}>
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
