from flask_login import LoginManager
from config import SECRET_KEY, HOST, PORT, ENV
from flask import Flask
from authlib.integrations.flask_client import OAuth
from router import user_blueprint, auth_blueprint
from sqlite3 import OperationalError
from models import init_db
from models import User
import logging


login_manager = LoginManager()
oauth = OAuth()


@login_manager.user_loader
def load_user(user_id):
    return User.get(user_id)


def initialize_db(app):
    try:
        with app.app_context():
            init_db()
    except Exception as e:
        logging.error(f"{e}")


def create_app():
    app = Flask(__name__)

    app.register_blueprint(user_blueprint)
    app.register_blueprint(auth_blueprint)
    app.secret_key = SECRET_KEY

    login_manager.init_app(app)
    oauth.init_app(app, cache={})

    initialize_db(app)
    return app


if __name__ == "__main__":
    logging.warning(f"Starting with environment: {ENV}")
    app = create_app()
    # app.run(host="0.0.0.0", port=5000)
    app.run(host=HOST, port=PORT) #, ssl_context="adhoc")
