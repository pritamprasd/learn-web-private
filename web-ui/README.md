### Deploy to github
```sh
cd ~/code/webapis/learn-web/web-ui/
npm run build
cp ~/code/webapis/learn-web/web-ui/build/* ~/code/projects/pritamprasd.github.io/ -r
cd ~/code/projects/pritamprasd.github.io/
git add .
git commit -m "new files"
git push
```


## Deploy to website
```sh
rm -rf build && npm run build && cd build && zip -r site.zip . && cd ..
```


## links
- https://www.react-simple-maps.io
