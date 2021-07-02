import sqlite3

from flask import current_app, g
from flask.cli import with_appcontext


def get_db():
    if "db" not in g:
        g.db = sqlite3.connect("sqlite_db", detect_types=sqlite3.PARSE_DECLTYPES)
        g.db.row_factory = sqlite3.Row
    return g.db


def close_db(e=None):
    db = g.pop("db", None)
    if db is not None:
        db.close()


def init_db():
    print("Hi.... 3")
    db = get_db()
    print("Hi.... 4")
    with current_app.open_resource("schema.sql") as f:
        db.executescript(f.read().decode("utf8"))
    print("Hi.... 5")


def init_app(app):
    app.teardown_appcontext(close_db)
