Referencecode.md

// delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
// .delete(function(req, res) {
//     Bear.remove({
//         _id: req.params.bear_id
//     }, function(err, bear) {
//         if (err)
//             res.send(err);

//         res.json({ message: 'Successfully deleted' });
//     });
// });

// router.route('/users/:user_id/bookmarks')
//   .post(function(req, res) {

//     User.findById(req.params.user_id, function(err, user) {

//       var bookmark = new Bookmark();
//       bookmark.url = req.body.url;
//       bookmark.description = req.body.description;
//       bookmark.title = req.body.title;
//       user.bookmarks.push(bookmark);

//       user.save(function(err) {
//         if (err)
//           res.send(err);

//         res.json({
//           message: 'Bookmark created!'
//         });
//       });

//     });
//   })

// .get(function(req, res) {
//   User.findById(req.params.user_id, function(err, user) {
//     if (err)
//       res.send(err);
//     res.json(user.bookmarks);
//   });
// });


// update the user with this id (accessed at PUT http://localhost:8080/api/users/:user_id)
// .put(function(req, res) {
//   // use our user model to find the user we want
//   User.findById(req.params.user_id, function(err, user) {

//     if (err)
//       res.send(err);

//     user.name = req.body.name; // update the users info

//     // save the user
//     user.save(function(err) {
//       if (err)
//         res.send(err);

//       res.json({
//         message: 'User updated!'
//       });
//     });

//   });
// })

// update the user with this id (accessed at PUT http://localhost:8080/api/users/:user_id)
// .put(function(req, res) {
//   // use our user model to find the user we want
//   User.findById(req.params.user_id, function(err, user) {

//     if (err)
//       res.send(err);

//     user.name = req.body.name; // update the users info

//     // save the user
//     user.save(function(err) {
//       if (err)
//         res.send(err);

//       res.json({
//         message: 'User updated!'
//       });
//     });

//   });
// })


// console.log(req.body);