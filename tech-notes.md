
## Commands
- start react without browser = `BROWSER=none npm start`


## Theory
### Flask Application Context
The application context is created and destroyed as necessary. It never moves between threads and it will not be shared between requests. As such it is the perfect place to store database connection information and other things.
- Creating an Application Context:
    1. whenever a request context is pushed
    2. explicitly:
        ```python
        from flask import Flask, current_app
        app = Flask(__name__)
        with app.app_context():
            print current_app.name
        ```

### Flask Request Context

### Flask-Login
Flask-Login provides user session management for Flask. It handles the common tasks of logging in, logging out, and remembering your users’ sessions over extended periods of time.


