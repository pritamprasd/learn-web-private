from config import UI_HOME_URL
from oauth.google_clients import (
    get_request_uri,
    get_token_with_auth_code,
    get_user_data,
)
from flask_login import logout_user, login_required, login_user
from flask_restful import Resource
from flask import url_for, request, redirect
from flask_cors import cross_origin
from models import User

class LoginResource(Resource):   
    @cross_origin()
    def get(self):
        return redirect(get_request_uri())


class LoginCallbackResource(Resource):
    def get(self):
        code = request.args.get("code")
        get_token_with_auth_code(code)
        userinfo_response = get_user_data()

        if userinfo_response.json().get("email_verified"):
            unique_id = userinfo_response.json()["sub"]
            users_email = userinfo_response.json()["email"]
            picture = userinfo_response.json()["picture"]
            users_name = userinfo_response.json()["given_name"]
        else:
            return "User email not available or not verified by Google.", 400

        user = User(
            id_=unique_id, name=users_name, email=users_email, profile_pic=picture
        )
        if not User.get(unique_id):
            User.create(unique_id, users_name, users_email, picture)
        login_user(user)

        return redirect(url_for("index"))


class LogoutResource(Resource):
    @login_required
    def get(self):
        logout_user()
        return redirect(UI_HOME_URL)


class AuthorizeResource(Resource):
    def get(self):
        pass
        # token = oauth.google.authorize_access_token()
        # print(f"token: {token}")
        # resp = oauth.google.get("account/verify_credentials.json")
        # resp.raise_for_status()
        # profile = resp.json()
        # # do something with the token and profile
        # return redirect("/")
