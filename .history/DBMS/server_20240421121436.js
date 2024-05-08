const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const app = express();

dotenv.config( { path : 'config.env'} )

const PORT = process.env.PORT || 8080

// log requests
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send("it's me, the app");
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
