const express = require('express');

const router = express.Router();


// Get Routes
router.get('/', (req, res) => {
      res.json({'message': 'This is a server'}
    )
  }
);

module.exports = router;