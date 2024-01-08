import click
from models import db, User, Todo
from flask.cli import with_appcontext, AppGroup
from main import app

'''
Generic Commands
'''

@app.cli.command("init")
def initialize():
    db.drop_all()
    db.create_all()
    bob = User(username='Bob', email='bobby@mail.com', password='arandompassword1')
    db.session.add(bob)
    db.session.commit()
    print('database intialized')

@app.cli.command("run")
def initialize():
    app.run(host='0.0.0.0', port=8080, debug=True)

@app.cli.command("create-user", help="Creates a user")
@click.argument("username", default="rob")
@click.argument("email", default="robmail")
@click.argument("password", default="robpass")
def create_user_command(username, email, password):
  newuser = User(username, email, password)
  try:
    db.session.add(newuser)
    db.session.commit()
  except Exception as e:
    db.session.rollback()
    print(str(e))
    print(f'{username} already exists!')
  else:
    print(f'{username} created!')

@app.cli.command('add-todo')
@click.argument('username', default='bob')
@click.argument('text', default='write code')
def add_user_todo_command(username, text):
  user = User.query.filter_by(username=username).first()
  if user:
    todo = user.add_todo(text)
    print(f'todo:{todo.id} {text} created!')
  else:
    f'{username} not found!'


@click.argument('username', default="bob")
@app.cli.command('get-todos', help="Gets a user's todos")
def get_user_todos_command(username):
  user = User.query.filter_by(username=username).first()
  if user:
    print(user.todos)
  else:
    f'{username} not found!'


@click.argument('todo_id', default=1)
@click.argument('username', default='bob')
@app.cli.command('toggle-todo')
def toggle_todo_command(todo_id, username):
  user = User.query.filter_by(username=username).first()
  if not user:
    print(f'{username} not found!')
    return

  todo = Todo.query.filter_by(id=todo_id, user_id=user.id).first()
  if not todo:
    print(f'{username} has no todo id {todo_id}')

  todo.toggle()
  print(f'{todo.text} is {"done" if todo.done else "not done"}!')

@app.cli.command('list-todos')
def list_todos():
  #tabulate package needs to work with an array of arrays
  data = []
  for todo in Todo.query.all():
    data.append([ todo.text, todo.done, todo.user.username, todo.cat_list()])
  print (tabulate(data, headers=["Text", "Done", "User"]))