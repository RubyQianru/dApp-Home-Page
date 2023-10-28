import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';

config();

const app = express();
const port = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());


import { connectToServer } from './db/conn.js';

import recordRoutes from './routes/record.js';

app.use(recordRoutes);

app.listen(port, () => {
  connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
