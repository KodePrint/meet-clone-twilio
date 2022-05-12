const express = require('express');
const passport = require('passport');
const ProfileServices = require('../services/profileServices');
const { createProfileScheme, getProfileScheme, updateProfileScheme } = require('../schemas/profileSchema');
const validatorHandler = require('../middlewares/validatorHandler');

const router = express.Router();
const service = new ProfileServices();

// *-*-* Get Method's *-*-*

// Get All
router.get(
    '/', 
    //passport.authenticate('jwt', { session: false }), 
    async (req, res, next) => {
      const users = await service.getAll();
      res.status(200).json(users);
    }
);

// Get One
router.get(
  '/:id', 
  //passport.authenticate('jwt', { session: false }), 
  validatorHandler(getProfileScheme, 'params'),
  async (req, res, next) => {
    try {
      const {id} = req.params;
      const user = await service.getById(id);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
);

// Post Method's
router.post(
  '/',
  //passport.authenticate('jwt', { session: false }), 
  validatorHandler(createProfileScheme, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const users = await service.create(body);
      res.status(201).json(users);
    } catch (error) {
      next(error);
    }
  }
)

// Patch Method's
router.put(
  '/:id',
  //passport.authenticate('jwt', { session: false }),
  validatorHandler(getProfileScheme, 'params'),
  validatorHandler(updateProfileScheme, 'body'),
  async (req, res, next) => {
    try {
      const {id} = req.params;
      const body = req.body;
      console.log(body)
      const user = await service.update(id, body);
      res.status(200).json(user);
    } catch (error) {
      next(error)
    }
  }
)
// Put Method's
router.patch(
  '/:id',
  //passport.authenticate('jwt', { session: false }),
  validatorHandler(getProfileScheme, 'params'),
  validatorHandler(updateProfileScheme, 'body'),
  async (req, res, next) => {
    try {
      const {id} = req.params;
      const body = req.body;
      console.log(body)
      const user = await service.update(id, body);
      res.status(200).json(user);
    } catch (error) {
      next(error)
    }
  }
)

// Delete Method's
router.delete(
  '/:id',
  //passport.authenticate('jwt', { session: false }),
  validatorHandler(getProfileScheme, 'params'),
  async (req, res, next) => {
    try {
      const {id} = req.params;
      const user = await service.delete(id);
      res.status(200).json(user);
    } catch (error) {
      next(error)
    }
  }
)

router.delete(
  '/:id',
  //passport.authenticate('jwt', { session: false }),
  validatorHandler(getProfileScheme, 'params'),
  async (req, res, next) => {
    try {
      const {id} = req.params;
      const user = await service.delete(id);
      res.status(200).json(user);
    } catch (error) {
      next(error)
    }
  }
)



module.exports = router;