const express = require('express');

const debug = require('debug')('app:adminRoutes');

const { MongoClient } = require('mongodb');

const adminRouter = express.Router();
const books = [
  {
    title: 'The Wind in the willows',
    genre: 'Fantasy',
    author: 'Kenneth Graham',
    read: false,
  },
  {
    title: 'The Wind in the willows',
    genre: 'Fantasy',
    author: 'Kenneth Graham',
    read: false,
  },
  {
    title: 'The Wind in the willows',
    genre: 'Fantasy',
    author: 'Kenneth Graham',
    read: false,
  },
  {
    title: 'The Wind in the willows',
    genre: 'Fantasy',
    author: 'Kenneth Graham',
    read: false,
  },
  {
    title: 'The Wind in the willows',
    genre: 'Fantasy',
    author: 'Kenneth Graham',
    read: false,
  },
  {
    title: 'The Wind in the willows',
    genre: 'Fantasy',
    author: 'Kenneth Graham',
    read: false,
  },
];

function router(nav) {
  adminRouter.route('/').get((req, res) => {
    const url = 'mongodb://localhost:27017';
    const dbName = 'libraryApp';

    (async function mongo() {
      let client;
      try {
        client = await MongoClient.connect(url);
        debug('connected correctly to the server');

        const db = client.db(dbName);

        const response = await db.collection('books').insertMany(books);
        res.json(response);
      } catch (err) {
        debug(err.stack);
      }

      client.close();
    }());
  });

  return adminRouter;
}

module.exports = router;
