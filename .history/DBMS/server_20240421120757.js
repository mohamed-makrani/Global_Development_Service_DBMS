const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config( { path : 'config.env'} )

const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.send("it's me, the app");
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
