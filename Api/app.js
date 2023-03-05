require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const helper = require('./helpers/response');
const routes = require('./routes');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(helper);
app.use(`${process.env.BASE_URL}`, routes);

// run app
app.listen(PORT, () => {
  console.log('server running on port', PORT);
});
