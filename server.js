const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotanv = require("dotenv");
const path = require("path");

// const { bgCyan } = require("colors");
// require("colors");
const connectDb = require("./config/config");

//dotenv config
dotanv.config();
//db config
connectDb();
//rest object
const app = express();

// middlewares

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(morgan("dev"));

// routes importing

app.use("/api/items", require("./routes/itemRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/bills", require("./routes/billsRoutes"));

// static files

 app.use(express.static(path.join(__dirname, './client/build')))

 app.get('*', function(req,res){

  res.sendFile(path.join(__dirname, './client/build/index.html'))

 })

// app.use("/api/users", require("./routes/userRoutes"));
// app.get("/", (req, res) => {
//   res.send("<h1>Hello</h1>");
// });
// app.get("/", function (req, res) {
//   res.sendFile(__client + "/bin/index.html"); // change the path to your index.html
// });

// Port
const PORT = process.env.PORT || 3000;

// listen
app.listen(3000, () => {
  console.log(`Server Running On Port ${PORT}`);
});
