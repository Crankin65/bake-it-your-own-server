const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
	overview: {
			author: {
				type: String
			},
			prepTime: {
				type: String,
				require: true
			},
			cookTime: {
				type: String,
				require: true
			},
			totalTime: {
				type: String,
				require: true
			},
			servingNumber: {
				type: String,
				require: true
			},
			cuisine: {
				type: String,
			},
			diet: {
				type: String
			},
	},
	instructions: {
		type: [String],
		require: true,
	},
	ingredients: {
		type: [String],
		require: true
	},
	tips: {
		type: Array
	},
	url: {
		type: String
	}
})

module.exports = mongoose.model("Recipe", RecipeSchema)