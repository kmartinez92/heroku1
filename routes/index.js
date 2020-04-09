//I could just put all my routes in this file for just one table in my db such as users,
//but what if I had a table for users, animals, etc... that will end up messy
//so using route.use to separate my routes

//=======================IF YOU WANT TO BREAK UP ALL ROUTES(CONTROLLERS IN SEP FILES... SEE BELOW)=================================

// apiRoutes == everything in the Api Folder
// setting all routes to start with /api and then whats in api will follow hence the const apiRoutes
// basically all routes in the api folder will start with /api

// const router = require("express").Router();
// const path = require("path");
// const apiRoutes = require("./api");
// router.use ("/api", apiRoutes);

// // If no API routes are hit, send the React app
// router.use((req, res) => {
// res.sendFile(path.join(__dirname, "../client/build/index.html"))})

// module.exports = router;

//===================================================================================================================================

//=======================IF YOU WANT TO PUT ALL ROUTES(CONTROLLERS IN ONE FILE... SEE BELOW)=========================================

const router = require('express').Router();
const db = require('../models');
const mongoose = require('mongoose');

module.exports = router;
//route to create Fruit
router.post('/api/fruit', (req, res) => {
	db.Fruit.create(req.body).then((fruit) => res.json(fruit)).catch((err) => res.json(err));
});

//route to get Fruits
router.get('/api/fruit', (req, res) => {
	db.Fruit
		.find({})
		.then((fruits) => {
			res.json(fruits);
		})
		.catch((err) => {
			res.json(err);
		});
});

//route to add Fruits
router.put('/api/fruit/add', (req, res) => {
	let id = mongoose.Types.ObjectId(req.body.fruitID);
	db.Fruit
		.findOneAndUpdate({ _id: id }, { $set: { quantity: req.body.quantity } })
		.then((fruit) => {
			res.json(fruit);
		})
		.catch((err) => {
			res.json(err);
		});
});

//route to minus Fruits
router.put('/api/fruit/minus', (req, res) => {
	let id = mongoose.Types.ObjectId(req.body.fruitID);
	db.Fruit
		.findOneAndUpdate({ _id: id }, { $set: { quantity: req.body.quantity } })
		.then((fruit) => {
			res.json(fruit);
		})
		.catch((err) => {
			res.json(err);
		});
});

//route to delete Fruit
router.post('/api/fruit/delete', (req, res) => {
	let id = mongoose.Types.ObjectId(req.body.fruitID);
	db.Fruit
		.remove({ _id: id })
		.then((fruit) => {
			res.json(fruit);
		})
		.catch((err) => {
			res.json(err);
		});
});

// route to create Sweet
router.post('/api/sweets', (req, res) => {
	db.Sweets
		.create(req.body)
		.then((sweet) => {
			res.json(sweet);
		})
		.catch((err) => {
			res.json(err);
		});
});
// route to get Sweets
router.get('/api/sweets', (req, res) => {
	db.Sweets
		.find({})
		.then((sweet) => {
			res.json(sweet);
		})
		.catch((err) => {
			res.json(err);
		});
});

//route to add Sweets
router.put('/api/sweets/add', (req, res) => {
	let id = mongoose.Types.ObjectId(req.body.sweetID);
	db.Sweets
		.findOneAndUpdate({ _id: id }, { $set: { quantity: req.body.quantity } })
		.then((sweet) => {
			res.json(sweet);
		})
		.catch((err) => {
			res.json(err);
		});
});

//route to minus Sweets
router.put('/api/sweets/minus', (req, res) => {
	let id = mongoose.Types.ObjectId(req.body.sweetID);
	db.Sweets
		.findOneAndUpdate({ _id: id }, { $set: { quantity: req.body.quantity } })
		.then((sweet) => {
			res.json(sweet);
		})
		.catch((err) => {
			res.json(err);
		});
});

//route to delete Sweets
router.post('/api/sweets/delete', (req, res) => {
	let id = mongoose.Types.ObjectId(req.body.sweetID);
	db.Sweets
		.remove({ _id: id })
		.then((sweet) => {
			res.json(sweet);
		})
		.catch((err) => {
			res.json(err);
		});
});
