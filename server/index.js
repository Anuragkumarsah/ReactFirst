const express = require('express')
const app = express()
const mongoose = require("mongoose");
const Router = require("./routes")

app.use(express.json());

mongoose.connect('mongodb+srv://Anurag:sukanya@rem.q222qql.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(3000, () => {
    console.log("server is running")
})
