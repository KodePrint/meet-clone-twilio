const express = require('express');
const RoomServices = require('../services/roomServices');
const validatorHandler = require('../middlewares/validatorHandler');
const { createRoomScheme } = require('../schemas/roomSchema')

const router = express.Router();
const service = new RoomServices();

// Get Routes
router.get('/', (req, res) => {
      res.json({'message': 'This is a server'}
    )
  }
);

// Post Routes
router.post('/',
  validatorHandler(createRoomScheme, 'body'),
  async (req, res, next) => {
    console.log(req.body)
    try {
      const data = req.body;
      const room = await service.createRoom(data);
      res.status(201).json(room)
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;