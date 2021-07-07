# Web APIs 🕸 
This Project is going to be a demostrator of WebAPIs.
For compatibility reason, this app is recommended to run on Chrome browser(mobile/desktop)

## Features ⤵ 
- A installable PWA
	- offline install, cache pages, service worker
	- Build a pipeline for increment deployment of PWA from Github Actions.
- Geolocation API
	- Display geolocation info as text
	- Show a plotted map with coordinates
- Bluetooth API blue-too
	- view paired devices info as list.
	- connect to soundbar and play music.
- Barcode Detection API
	- read barcodes and display
- File System Access API 📁 
	- read a text file and view it.
- Contact Picker API
	- read a bunch of contacts and view on page 😕 
- MediaStream Image Capture API
	- open camera with button click
- Credential Management API
- 3rd Prty Login Page [v2]
	- set of logins on front page
	- after login page to have some cool examples as data pulled from 3rd party
		- google:
			- Fetch playlist data from google music and presetn it. ⏩ 
		- github:
			- pull all projects in nice looking tiles
- rest pull from https://developer.mozilla.org/en-US/docs/Web/API on need basis. 🤣 

😥 😥 😥 


## Phases:
- v1.0:
	- no 3rd party login examples, no backend, no dbs
	- only pure client side run webapi examples
	- direct deployment to Github pages with github actions
	- For testing use letsencrypt cert.
	- 
- v1.1:
	- Installable PWA; use workbox
- v2: 
	- Google Login example
	- will need to host a backend service
	- deploy backend service :
		- on aws ecs
		- associate with www.pritamprasad.com
		- using Terraform
	- deploy frontend from github to s3 with www.pritamprasad.com as route
- v3:
	- some examples with Github login
	- some example with instagram/tweeter like social app


## Structure:
- Home Page: A gallery view as each webapi example page as a tile.
- Login Page: Web Login Specific Examples. A collection of social logins supported.


## Tech:
- ReactJS, Flask
- www.pritamprasad.com
- AWS ECS, Route53, ECR


## Configurations
- UI default port : `3000`
- Backend default port: `5000`

## How to start
1. Backend:
- Create a file `.env` inside `backend` directory. copy contents of .`env.template` to `.env` and fill the values. Here's what they mean:
	- HOST=<host to run python app on, default: `0.0.0.0`>
	- PORT=<port number, default: 5000>
	- ENV: dev / prod
	- GOOGLE_CLIENT_ID=<duhh..>
	- GOOGLE_CLIENT_SECRET=<duhh..>
```sh
cd backend 
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py
```





## Resources
- learn clamp() css, to eliminate media queries
- 