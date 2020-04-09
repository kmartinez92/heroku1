const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

// This file empties the Sweets collection and inserts the Sweets below
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reactBoilerplate');

const itemSeed = [
	{
		item: 'Gummy Bears',
		quantity: '54',
		type: 'Sweet',
		image: './images/gummies.jpg'
	},
	{
		item: 'Corn Candy',
		quantity: '69',
		type: 'Sweet',
		image: './images/corn-candy.jpg'
	},
	{
		item: 'M&Ms',
		quantity: '888',
		type: 'Sweet',
		image: './images/mms.jpg'
	},
	{
		item: 'Butterfingers',
		quantity: '14',
		type: 'Sweet',
		image: './images/butterfinger.jpg'
	},
	{
		item: 'Sour Patch Kids',
		quantity: '221',
		type: 'Sweet',
		image: './images/sour-patch-kids.jpg'
	}
];

db.Sweets
	.deleteMany({})
	.then(() => db.Sweets.collection.insertMany(itemSeed))
	.then((data) => {
		console.log(data.insertedIds.length + ' records inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
