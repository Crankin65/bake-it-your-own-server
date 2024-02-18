const mongoose = require("mongoose");
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

// const Schema = mongoose.Schema;
const { Schema } = mongoose

// const UsersSchema = new Schema({
// 	first_name: {
// 		type: String,
// 		require: true,
// 		maxLength: 50
// 	},
// 	last_name: {
// 		type: String,
// 		require: true,
// 		maxLength: 50
// 	},
// 	email: {
// 		type: String,
// 		require:  true
// 	},
// 	hash: String,
// 	salt: String,
// 	cookbook: {
// 		type: Object
// 	}
// })

//temp users
const UsersSchema = new Schema({
	email: String,
	hash: String,
	salt: String,
});

//User Set Password
UsersSchema.methods.setPassword = function(password) {
	this.salt = crypto.randomBytes(16).toString('hex');
	this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

//User validate password
UsersSchema.methods.validatePassword = function(password) {
	const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
	return this.hash === hash;
}

// Generate JWT
UsersSchema.methods.generateJWT = function() {
	const today = new Date();
	const expirationDate = new Date(today);
	expirationDate.setDate(today.getDate() + 60);

	return jwt.sign({
		email: this.email,
		id: this._id,
		exp: parseInt(expirationDate.getTime() / 1000, 10),
	}, 'secret');
}

//Auth Json
UsersSchema.methods.toAuthJSON = function() {
	return {
		_id: this._id,
		email: this.email,
		token: this.generateJWT(),
	};
};

// Virtual Full name
UsersSchema.virtual("name").get(function () {
	let fullname = "";

	if (this.first_name && this.last_name) {
		fullname = `${this.first_name} ${this.last_name},`;
	}

	return fullname;
})

// Virtual Url
UsersSchema.virtual("url").get(function () {
	// We don't use an arrow function as we'll need the this object
	return `/user/${this._id}`;
});

// require('../config/passport')
mongoose.model("Users", UsersSchema)

// module.exports = mongoose.model("Users", UsersSchema)