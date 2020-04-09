//requiring in my controllers file for Fruits
const router = require('express').Router();
const fruitController = require('../../controllers/fruitController');

module.exports = router;

// /api/fruit/
router.route('/').get(fruitController.findAll);

// /api/fruit/:data  route to create fruit
router.route('/').post(fruitController.createFruit);

// /api/fruit/add route to add fruit quantity
router.route('/add/').put(fruitController.addFruit);

// /api/fruit/minus route to decrease fruit quantity
router.route('/minus/').put(fruitController.minusFruit);

// /api/fruit/delete  route to delete fruit
router.route('/delete/').post(fruitController.deleteFruit)