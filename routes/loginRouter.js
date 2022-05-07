const express = require('express');
const boom = require('@hapi/boom');
const passport = require('passport');
const { session } = require('passport/lib');


const router = express.Router();

router.get('/failed',
  (req, res) => {
    res.send('You failed to authenticate');
  }
)
router.get('/good',
  (req, res) => {
    res.send(`Welcome ${req.user}`);
  }
)

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/google/callback', 
  passport.authenticate('google', { failureRedirect: '/api/v1/auth/failed' }),
  function(req, res, next) {
    // Successful authentication, redirect home.
    console.log(req.user)
    res.redirect('/api/v1/auth/good');
  }
);

router.get
  ('/github',
  passport.authenticate('github', { scope: [ 'user', 'user:email' ] })
);

router.get('/github/callback', 
  passport.authenticate('github', { failureRedirect: '/api/v1/auth/failed' }),
  function(req, res, next) {
    // Successful authentication, redirect home.
    console.log(req.user)
    res.redirect('/api/v1/auth/good');
  }
);

module.exports = router;
