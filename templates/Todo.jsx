import React from 'react';


const TodoPage = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
          @import url('https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css');
          div.card {
            margin: 0;
          }

          #result {
            margin-top: 10px;
            height: 55vh;
            overflow-y: scroll;
          }

          .card {
            height: 265px;
            padding-top: 50px;
          }

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
            <a href="#!" className="brand-logo center">Todo App</a>
            <ul id="nav-mobile" className="right">
              <li><a href="/logout">Logout</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <div id="root">
        <form name="addForm" className="card" method="POST" action="/createTodo">
          <div className="card-content">
            <span className="card-title">Create Todo</span>
            <div className="input-field">
              <input type="text" name="text" placeholder="Enter Todo Text" className="materialize-textarea" />
              <label htmlFor="text">Enter Todo Text</label>
            </div>
          </div>
          <div className="card-actions">
            <div className="row">
              <div className="col sm12 m4 offset-m8">
                <input className="btn blue right" type="submit" value="SAVE" />
              </div>
            </div>
          </div>
        </form>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </>
  );
};

export default TodoPage;
