#Project One Backend

This is the repo for the backend code that will support the Linked Learning and Mewer apps by the Gammas.

##Endpoints
GET https://project1-backend.herokuapp.com/api/users #=> Get all users
POST https://project1-backend.herokuapp.com/api/users #=> Create a user
GET https://project1-backend.herokuapp.com/api/users/:user_id #=> Get single user
POST https://project1-backend.herokuapp.com/api/users/:user_id/shoutouts #=> add  shoutout to a user

##NPM & Dependencies
The node_modules folder is not included in the repo, however the package.json file will fetch them for you if you type `$ npm install`.

##Setting up your local MongoDB
Here is a tutorial on [how to install MongoDB](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/) and then how to [set up mongoDB locally](http://docs.mongodb.org/manual/tutorial/getting-started/) and finally how to [create documents](http://docs.mongodb.org/manual/tutorial/getting-started/#getting-started-create-documents) which basically means "putting stuff in your batabase so you can see it."

####Try this quickstart first...

MongoDB Quick Install/Setup Guide - Assumes you have Homebrew installed.

`$ brew update` to make sure it's aware of the latest version of Mongo

`$ brew install MongoDB` to install MongoDB

Now set up the place where all of the databases live. By default for Mongo it's /data/db. So type

`$ mkdir -p /data/db`

Make sure that the directory you just created has full read/write privileges.

Now start MongoDB up:

`$ mongod`

You should see an instance of the MongoDB terminal interface running, and you can manipulate the databases from here.

Now create your database for this project. Type

`$ use project1-backend' in the MongoDB terminal interface and it will create a database named gammadb for you. Naming it project1-backend will ensure that the code in this repo will point to a local db that you can use to develop locally.

##Postman for talking to the API/database

You can talk to your db through the mongo CLI, but (Postman)[https://www.getpostman.com/] is freaking awesomer at it.

##The .gitignore file

The node_modules folder is not included in the repo, however the package.json file will fetch all of your dependencies for you if you type `$ npm install`. Keeping them out of the repo is one more way to avoid merge and/or version confilicts.

##Testing on a local database (instead of having to push to Heroku all the time).

This assumes that you have already installed MongoDB as described above, or in the MongoDB docs.

Make sure you have mongodb server running by typing `$ mongod`

Open up a new tab and type `$ mongo` to get the MongoDB CLI running. Inside the mongo CLI, type `$ use project1-backend` to make sure you're on project1-backend.

In a new tab, type `$ node server.js`

In Postman, use http://localhost:8080/api/bookmarks and http://localhost:8080/api/users instead of the heroku url. This allows you to test locally without having to push to Heroku and wait for it to build every time you make a change.

In order to test if everything is working, create a new user or bookmark and then go to the Mongo CLI (which is running in your terminal because you already typed `$ mongo` in a previous tab) and type 'db.users.find()' or 'db.bookmarks.find()'. If the new document you created with Postman shows up, then everything is set up correctly.

You can also do the regular old GET request in Postman for all users or bookmarks to see if everything is working properly instead of using the Mongo CLI.

##Database hosted on Heroku with MongoLabs

We've set up a Heroku instance. The project1-backend MongDB database is  hosted on Heroku via (MongoLab)[https://mongolab.com/]. (Docs about connecting to MongoLab are here)[http://docs.mongolab.com/connecting].
    URL: https://project1-backend.herokuapp.com/api.
    user/appID/account: heroku_app35449457
    pwd: ovvi9mjr2p5a22tl6645eifhri

To connect with the terminal using the mongo CLI:
`mongo ds059821.mongolab.com:59821/heroku_app35449457 -u <dbuser> -p <dbpassword>`

i.e
mongo ds059821.mongolab.com:59821/heroku_app35449457 -u heroku_app35449457 -p ovvi9mjr2p5a22tl6645eifhri

#Gotchas

Make sure that you are running BOTH the 'mongod' database server `$ mongod` AND the node server 'server.js' `$ node server.js`. One powers the database, the other serves to your localhost.


