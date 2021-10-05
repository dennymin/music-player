require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.listen(3000, () => {
  console.log(`express server listening on port 3000`)
})

app.get('/test', (req, res, next) => {
  res.status(200).json('hi')
}
)
