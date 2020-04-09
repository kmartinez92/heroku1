const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new FruitSchema object
// This is similar to a Sequelize model

const fruitSchema = new Schema({
	item: {
		type: String,
		required: true
	},
	quantity: {
		type: Number,
		required: true
	},
	type: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	}
});

const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;
