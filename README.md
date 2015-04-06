#Project One Backend

This is the repo for the backend code that will support the Linked Learning and Shout Out apps by the Gammas.

####.gitignore & Node dependencies

The node_modules folder is not included in the repo, however the package.json file will fetch them for you if you type `$ npm install`. Keeping them out of the repo is one more way to avoid merge confilicts. 

The .gitignore file

### Test on a local database instead of having to push to heroku all the time.

Make sure you have mongodb server running by typing `$ mongod` while in the project1-backend directory.

Then open up a new tab and type `$ mongo`

Inside the mongo CLI, type `$ use project1-backend` to create a new database named project1-backend.

In a new tab, type `$ node server.js`

In postman, use http://localhost:8080/api/bookmarks and http://localhost:8080/api/users, instead of the heroku url.

In order to test if everything is working, create a new user or bookmark, then go to the mongo cli running in your terminal and type 'db.users.find()' or 'db.bookmarks.find()'. If the new document you created with postman shows up everything is set up correctly.

You can also do the regular old get request for all users or bookmarks to see if everything is working properly instead of using the command line.

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

