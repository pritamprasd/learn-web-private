import requests
import logging
import json

from flask import request

from oauthlib.oauth2 import WebApplicationClient
from config import GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_DISCOVERY_URL

g_client = WebApplicationClient(GOOGLE_CLIENT_ID)


def get_google_provider_cfg():
    return requests.get(GOOGLE_DISCOVERY_URL).json()


def get_token_with_auth_code(code):
    token_endpoint = get_google_provider_cfg()["token_endpoint"]
    token_url, headers, body = g_client.prepare_token_request(
        token_endpoint,
        authorization_response=request.url,
        redirect_url=request.base_url,
        code=code,
    )
    token_response = requests.post(
        token_url,
        headers=headers,
        data=body,
        auth=(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET),
    )
    logging.debug(f"token response: {token_response.json()}")
    g_client.parse_request_body_response(json.dumps(token_response.json()))


def get_user_data():
    userinfo_endpoint = get_google_provider_cfg()["userinfo_endpoint"]
    uri, headers, body = g_client.add_token(userinfo_endpoint)
    userinfo_response = requests.get(uri, headers=headers, data=body)
    logging.debug(f"User Response: {userinfo_response.json()}")
    return userinfo_response


def get_request_uri(self):
    authorization_endpoint = get_google_provider_cfg()["authorization_endpoint"]
    request_uri = g_client.prepare_request_uri(
        authorization_endpoint,
        redirect_uri=request.base_url + "/callback",
        scope=["openid", "email", "profile"],
    )
    logging.debug(f"request_uri: {request_uri}")
    return request_uri