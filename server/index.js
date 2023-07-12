require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const postRoute = require("./routes/posts");

app.use(express.json());
app.use(express.static("public"));

app.use(
  cors({
    origin: `${process.env.NEXT_PUBLIC_MAIN_DOMAIN}`,
  })
);

// Connecting to the MongoDB
mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to the PORT ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Failed to Connect PORT ${process.env.PORT}, Error: ${error}`);
  });

app.use("/", postRoute);
