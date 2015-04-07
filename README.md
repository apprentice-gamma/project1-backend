#Project One Backend

This is the repo for the backend code that will support the Linked Learning and Shout Out apps by the Gammas.

####.gitignore & Node dependencies

The node_modules folder is not included in the repo, however the package.json file will fetch them for you if you type `$ npm install`. Keeping them out of the repo is one more way to avoid merge confilicts. 

The .gitignore file

### Test on a local database instead of having to push to heroku all the time.

This assumes that you have already installed MongoDB as descripbed in the MongoDB docs.

Make sure you have mongodb server running by typing `$ mongod`

Open up a new tab and type `$ mongo` to get the MongoDB CLI running. Inside the mongo CLI, type `$ use project1-backend` to create a new database named project1-backend.

In a new tab, type `$ node server.js`

In postman, use http://localhost:8080/api/bookmarks and http://localhost:8080/api/users instead of the heroku url. This allows you to test locally without having to push to Heroku and wait for it to build every time you make a change.

In order to test if everything is working, create a new user or bookmark, then go to the Mongo CLI (which is running in your terminal because you already typed `$ mongo` in a previous tab) and type 'db.users.find()' or 'db.bookmarks.find()'. If the new document you created with postman shows up everything is set up correctly.

You can also do the regular old GET request for all users or bookmarks to see if everything is working properly instead of using the Mongo CLI.

Morgan is being used for logging.

###Database hosted on Heroku with MongoLabs

We've set up a Herku instance at https://project1-backend.herokuapp.com/api.

Database is MongDB hosted on Heroku via MongoLab. It's ID is `heroku_app35449457`

Connecting to MongoLabs: http://docs.mongolab.com/connecting/

To connect with the terminal:

`mongo ds059821.mongolab.com:59821/heroku_app35449457 -u <dbuser> -p <dbpassword>`

{ user: "heroku_app35449457", account: "heroku_app35449457" }

pwd: ovvi9mjr2p5a22tl6645eifhri

i.e

mongo ds059821.mongolab.com:59821/heroku_app35449457 -u heroku_app35449457 -p ovvi9mjr2p5a22tl6645eifhri

#Gotchas

Make sure that you are running BOTH the 'mongod' database server `$ mongod` AND the node server 'server.js' `$ node server.js`.


