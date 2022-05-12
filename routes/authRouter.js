const express = require('express');
const boom = require('@hapi/boom');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const AuthServices = require('../services/authServices');


const router = express.Router();
const service = new AuthServices();

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
    const { displayName, emails, photos } = req.user;
    console.log({
      name: displayName,
      email: emails[0].value,
      image: photos[0].value
    }) 
    res.redirect('http://localhost:3005/');
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
    const { displayName, photos, emails } = req.user
    console.log({
      name: displayName,
      email: emails[0].value,
      image: photos[0].value
    })
    res.redirect('http://localhost:3005/');
  }
);

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const { user } = req;
      const tokens = await service.createTokens(user);
      res.json(
        {
          "email":user.email,
          "name": user.profile.name,
          "image": user.profile.image,
          "access_token": tokens.token,
          "refresh_token": tokens.refreshToken
        }
      )
    } catch (error) {
      next(error)
    }
  }
)

module.exports = router;
