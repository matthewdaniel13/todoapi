import React from 'react';

const SignupPage = () => {
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
            <a href="#!" className="brand-logo center">Sign Up</a>
            <ul id="nav-mobile" className="right">
              <li><a href="/login">Login Page</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <div id="root">
        <main className="container" style={{ marginTop: '100px' }}>
          <form className="card col s12" id="loginForm" method="POST" action="/signup" style={{ padding: '1em' }}>
            <div className="row">
              <div className="input-field col s12 m6">
                <input placeholder="Enter Email" name="email" type="email" className="validate" />
                <label htmlFor="email">Email</label>
              </div>

              <div className="input-field col s12 m6">
                <input placeholder="Enter Username" name="username" type="text" className="validate" />
                <label htmlFor="username">Username</label>
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

export default SignupPage;
