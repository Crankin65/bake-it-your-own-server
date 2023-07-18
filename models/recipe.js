const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
	overview: {
		type: Object,
		require: true
	},
	instructions: {
		type: Array,
		require: true,
	},
	ingredients: {
		type: Array,
		require: true
	},
	tips: {
		type: Array
	}
})