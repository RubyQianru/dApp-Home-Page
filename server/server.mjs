// import express from "express";
// import cors from "cors";
// import "./loadEnvironment.mjs";
// import records from "./routes/record.mjs";

// const PORT = 5050;
// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/record", records);

// // start the Express server
// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });

import mongoose from "mongoose";
import Item from "./models/Items";


mongoose.connect("mongodb://localhost/items", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.get("/api/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});