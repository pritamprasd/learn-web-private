import os
from dotenv import load_dotenv



GOOGLE_CLIENT_ID = os.environ.get("GOOGLE_CLIENT_ID", None)
GOOGLE_CLIENT_SECRET = os.environ.get("GOOGLE_CLIENT_SECRET", None)
GOOGLE_DISCOVERY_URL = "https://accounts.google.com/.well-known/openid-configuration"

SECRET_KEY = os.environ.get("SECRET_KEY") or os.urandom(24)

UI_HOST = "localhost"
UI_HOME_URL = UI_HOST+ ":3000/"


print(os.environ.get("TADA","NF"))