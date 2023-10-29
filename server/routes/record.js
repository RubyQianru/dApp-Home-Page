import express from 'express';
import { ObjectId } from 'mongodb'; // Import ObjectId from 'mongodb' module
import { getDb } from '../db/conn.js';

const recordRoutes = express.Router();

// This section will help you get a list of all the records.
recordRoutes.route('/record').get(async (req, res) => {
  try {
    const db_connect = getDb('Blog'); 
    const result = await db_connect.collection('BlogPosts').find({}).toArray();
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// This section will help you get a single record by id
recordRoutes.route('/record/:id').get(async (req, res) => {
  try {
    const db_connect = req.app.locals.db; // Use the database connection from app.locals
    const myquery = { _id: ObjectId(req.params.id) };
    const result = await db_connect.collection('BlogPosts').findOne(myquery);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// This section will help you update a record by id.
recordRoutes.route('/update/:id').post(async (req, res) => {
  try {
    const db_connect = req.app.locals.db; // Use the database connection from app.locals
    const myquery = { _id: ObjectId(req.params.id) };
    const newvalues = {
      $set: {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
      },
    };
    const result = await db_connect.collection('records').updateOne(myquery, newvalues);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// This section will help you create a new record.
recordRoutes.route("/record/add").post(function (req, response) {
  let db_connect = getDb('Blog');
  let myobj = {
    title: req.body.title,
    user: req.body.user,
    content: req.body.content,
  };
  db_connect.collection("BlogPosts").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
 });
  
 // This section will help you update a record by id.
 recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      title: req.body.title,
      user: req.body.user,
      content: req.body.content,
    },
  };
  db_connect
    .collection("BlogPosts")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
 });


export default recordRoutes;
