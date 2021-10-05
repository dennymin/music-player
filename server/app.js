require('dotenv').config()
const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log(`express server listening on port 3000`)
})

app.get('', (req, res, next) => {
  res.status(200).json('hi')
}
)
