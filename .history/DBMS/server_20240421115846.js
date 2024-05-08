const express = require('express');

const app = express();

const PORT = process.env.PORT || 
app.get('/', (req, res) => {
  res.send("it's me, the app");
});

app.listen(3000, () => {
  console.log('server is running');
});
