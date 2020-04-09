//requiring in my controllers file for Sweets
const router = require('express').Router();
const sweetsController = require('../../controllers/sweetsController');

module.exports = router;

// /api/sweets/
router.route('/').get(sweetsController.findAll);

// /api/sweets/:data route to create sweets
router.route('/').post(sweetsController.createSweet);

// /api/sweets/add route to add sweets quantity
router.route('/add/').put(sweetsController.addSweet);

// /api/sweets/minus route to decrease sweets quantity
router.route('/minus/').put(sweetsController.minusSweet);

// /api/sweets/delete  route to delete sweets
router.route('/delete/').post(sweetsController.deleteSweet);
