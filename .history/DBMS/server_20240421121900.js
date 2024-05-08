const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
const app = express();

dotenv.config( { path : 'config.env'} )

const PORT = process.env.PORT || 8080

// log requests
app.use(morgan('tiny'));

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))

// set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

app.get('/', (req, res) => {
  res.send("it's me, the app");
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
