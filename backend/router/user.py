from flask import Blueprint
from flask_restful import Api
from resources import UserResource

user_blueprint = Blueprint("user", __name__)

Api(user_blueprint).add_resource(UserResource,'/user')
