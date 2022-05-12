const express = require('express');
const cors = require('cors')
const routerApi = require('./routes')
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/errorHandler')

// Settigs API WhiteList
const whitelist = ['http://localhost:5500','http://localhost:3005',]

const app = express();
const port = 5000;
app.use(express.json());

// Cors
const option = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin) || !origin){
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}
app.use(cors());

// Passport Strateies
require('./utils/auth/index');


// Routes
routerApi(app);

// Middlewares
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

// Start the Server
app.listen(port, () => {
  console.log(`Server Express runing on port ${port}`);
  console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-');
})