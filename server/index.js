const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const proxy = require('express-http-proxy');
const port = process.env.PORT || 5678;

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, './public')));
app.use(cors());

app.use('/', proxy('http://localhost:1258'));
// app.use('/', proxy('http://localhost:3000'));

// app.get('/', (req, res) => {
//   res.send('Hello')
// })

app.listen(port, () => {
  console.log('Server listening on port: ', port)
})