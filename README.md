# Build mini ecommerce - React + Redux, Node, Express, MongoDB

videos: https://www.youtube.com/watch?v=0divhP3pEsg

MongoDB Atlas: https://www.mongodb.com/cloud/atlas

This is also using localstortage
- to persist the cart items (see localStorage in the redux store and cart actions)
- if going to another browser or tab cart items still visible
- in this app, currently the cart is managed only in frontend, not in backend, not connected to DB or any service in backend

## mongodb/cloud/atlas
- create Project
  - react08-mini-mern-ecommerce
- react08-mini-mern-ecommerce > Build a cluster > shared cluster > AWS > create cluster
- database access > new database user  -read & write DB
    - react06User / McSqHLBUX38vJ01r
- network access > IP Whitelist > add IP adress > add current ip adress
- cluster > CONNECT > Connect your application > driver = node.js > copy connection detail and use it in noder/server in .env MONGO_URI param. Update database name..mongodb.net/<dbname>...into something more meaningful .mongodb.net/shop?retr

# env 

root folder create .env:

PORT=5000
MONGO_URI=mongodb+srv://react06User:1boUreQICC0A1HhI@cluster0.ompgy.mongodb.net/shop?retryWrites=true&w=majority

# start

## Install

npm install

cd frontend
npm install

## Start server

node .\backend\server.js

## Load data using script

node backend/seederScript

## start client

npm start --prefix frontend

## update npm package to latest
https://www.carlrippon.com/upgrading-npm-dependencies/

npm audit
npm audit fix
npm outdated
All the dependencies can be safely updated to the wanted version by using the following command:
npm update  // npm update "xx"
npx npm-check-updates -u
npm install

## deploy server heroku  
'process.env.PORT' will be populated automatically by heroku  
  
add Procfile : no web app, only functions (APIs)   
  worker: node backend/server.js  
  --> enable heroku to start the app as soon as the application is deployed  

Connect to Heroku and create new App: rlu-shop-mern  

Install the Heroku CLI  
Download and install the Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli  
npm install -g heroku  (not recommended method, make sure to use latest release of Node.js)  


heroku login 
heroku config 
git init  
heroku git:remote -a rlu-shop-mern  
heroku config
git add .  
git commit -am "xx"  
heroku config  
heroku config:set NODE_ENV=production  
heroku config:set MONGO_URI=mongodb+srv://react06User:1boUreQICC0A1HhI@cluster0.ompgy.mongodb.net/shop?retryWrites=true&w=majority
heroku config  
git push heroku master  
heroku logs --tail  

--> Server URL: https://rlu-shop-mern.herokuapp.com/

## Deploy client on Netlify

cd frontend
npm install
cd .. 
npm start --prefix frontend 

Deploy from GIT  

Update Site Name to rlu-video-chat 
Set env variable NODE_ENV=production

--> Client running on https://rlu-video-chat.netlify.app/
