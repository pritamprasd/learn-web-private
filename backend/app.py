from flask import Flask
from router import user_blueprint

app = Flask(__name__)

app.register_blueprint(user_blueprint)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
