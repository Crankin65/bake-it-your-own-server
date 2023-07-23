// const { MongoClient } = require("mongodb");
// const connectionString = process.env.MONGO_URI;
//
//
// const client = new MongoClient(connectionString);
//
// let conn;
//
// (async () => {
// 	try {
// 		conn = await client.connect();
// 	} catch (e) {
// 		console.error(e);
// 	}
// })();
//
// let db = conn.db("Recipe")
//
// module.exports = db;