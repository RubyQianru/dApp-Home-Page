import express from 'express';
import { ObjectId } from 'mongodb'; // Import ObjectId from 'mongodb' module
import { getDb } from '../db/conn.js';

const recordRoutes = express.Router();

// This section will help you get a list of all the records.
recordRoutes.route('/record').get(async (req, res) => {
  try {
    const db_connect = getDb('record'); 
    const result = await db_connect.collection('records').find({}).toArray();
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
    const result = await db_connect.collection('records').findOne(myquery);
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




export default recordRoutes;
