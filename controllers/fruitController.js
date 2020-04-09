//All routes lead to the controllers file
//require your models and export your functions

const db = require('../models');
const mongoose = require("mongoose");


module.exports = {
	findAll: (req, res) => {
		db.Fruit
			.find({})
			.then((fruits) => {
				res.json(fruits);
			})
			.catch((err) => {
				res.json(err);
			});
	},

	createFruit: (req,res) => {
		db.Fruit
		.create(req.body)
		.then(fruit => res.json(fruit))
		.catch(err => res.json(err))
	},

	addFruit: (req,res) => {
		let id = mongoose.Types.ObjectId(req.body.fruitID);
		db.Fruit.findOneAndUpdate(
			{_id: id}, {$set: { quantity: req.body.quantity }})
			.then((fruit) => {res.json(fruit)})
			.catch((err) => {res.json(err)})		

	},

	minusFruit: (req,res) => {
		let id = mongoose.Types.ObjectId(req.body.fruitID);	
		db.Fruit.findOneAndUpdate(
			{_id: id}, {$set: { quantity: req.body.quantity }})
			.then((fruit) => {res.json(fruit)})
			.catch((err) => {res.json(err)})
	},

	deleteFruit: (req,res) => {
		console.log(req.body);	
		let id = mongoose.Types.ObjectId(req.body.fruitID);
		db.Fruit.deleteOne({_id: id})
		.then((fruit) => {res.json(fruit)})
		.catch((err) => {res.json(err)})
	}
};
