from flask import Blueprint
from flask_restful import Api
from resources import (
    LoginResource,
    AuthorizeResource,
    LoginCallbackResource,
    LogoutResource,
)

auth_blueprint = Blueprint("auth", __name__)

@auth_blueprint.after_request
def after_request(response):
    header = response.headers
    header['Access-Control-Allow-Origin'] = '*'
    return response

Api(auth_blueprint).add_resource(LoginResource, "/login")
Api(auth_blueprint).add_resource(LoginCallbackResource, "/login/callback")
Api(auth_blueprint).add_resource(LogoutResource, "/logout")

Api(auth_blueprint).add_resource(AuthorizeResource, "/authorize")


