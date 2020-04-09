//All routes lead to the controllers file
//require your models and export your functions

const db = require('../models');
const mongoose = require("mongoose");


module.exports = {
	findAll: (req, res) => {
		db.Sweets
			.find({})
			.then((sweets) => {
				res.json(sweets);
			})
			.catch((err) => {
				res.json(err);
			});
	},

	createSweet: (req,res) => {
		db.Sweets
		.create(req.body)
		.then(sweet => res.json(sweet))
		.catch(err => res.json(err))
	},

	addSweet: (req,res) => {
		let id = mongoose.Types.ObjectId(req.body.sweetID);
		db.Sweets.findOneAndUpdate(
			{_id: id}, {$set: { quantity: req.body.quantity }})
			.then((sweet) => {res.json(sweet)})
			.catch((err) => {res.json(err)})		

	},

	minusSweet: (req,res) => {
		let id = mongoose.Types.ObjectId(req.body.sweetID);	
		db.Sweets.findOneAndUpdate(
			{_id: id}, {$set: { quantity: req.body.quantity }})
			.then((sweet) => {res.json(sweet)})
			.catch((err) => {res.json(err)})
	},

	deleteSweet: (req,res) => {
		let id = mongoose.Types.ObjectId(req.body.sweetID);
		db.Sweets.deleteOne({_id: id})
		.then((sweet) => {res.json(sweet)})
		.catch((err) => {res.json(err)})
	}
};
