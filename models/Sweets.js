const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new SweetsSchema object
// This is similar to a Sequelize model

const sweetsSchema = new Schema({
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

const Sweets = mongoose.model('Sweets', sweetsSchema);

module.exports = Sweets;
