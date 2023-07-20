const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	first_name: {
		type: String,
		require: true,
		maxLength: 50
	},
	last_name: {
		type: String,
		require: true,
		maxLength: 50
	},
	cookbook: {
		type: Object
	}
})

// Virtual Full name
UserSchema.virtual("name").get(function () {
	let fullname = "";

	if (this.first_name && this.last_name) {
		fullname = `${this.first_name} ${this.last_name},`;
	}

	return fullname;
})

// Virtual Url
UserSchema.virtual("url").get(function () {
	// We don't use an arrow function as we'll need the this object
	return `/user/${this._id}`;
});

module.exports = mongoose.model("User", UserSchema)