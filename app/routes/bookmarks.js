var express = require('express');
var router = express.Router();

var Bookmark = require('../models/bookmark.js');

router.route('/bookmarks')
  .post(function(req, res) {

    var bookmark = new Bookmark();
    bookmark.url = req.body.url;
    bookmark.title = req.body.title;
    bookmark.user = req.body.user;
    bookmark.description = req.body.description;

    bookmark.save(function(err) {
      if (err)
        res.send(err);

      res.json({
        message: 'Bookmark created!'
      });
    });

  })

  .get(function(req, res) {
    Bookmark.find(function(err, bookmarks) {
      if (err)
        res.send(err);

      res.json(bookmarks);
    });
  });

router.route('/bookmarks/:bookmark_id')
  .get(function(req, res) {
    Bookmark.findById(req.params.bookmark_id, function(err, bookmark) {
      if (err)
        res.send(err);
      res.json(bookmark);
    });
  })

  .put(function(req, res) {
    Bookmark.findById(req.params.bookmark_id, function(err, bookmark) {

      if (err)
        res.send(err);

      bookmark.url = req.body.url;
      bookmark.title = req.body.title;
      bookmark.description = req.body.description;

      bookmark.save(function(err) {
        if (err)
          res.send(err);

        res.json({
          message: 'Bookmark updated!'
        });
      });

    });
  })

router.route('/bookmarks/:bookmark_id/comments')
  .post(function(req, res) {

    Bookmark.findById(req.params.bookmark_id, function(err, bookmark) {

      bookmark.comments.push(req.body.commentText);

      bookmark.save(function(err) {
        if (err)
          res.send(err);

        res.json({
          message: 'Comment created!'
        });
      });

    });
  })

module.exports = router;