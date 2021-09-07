const { Sequelize } = require('sequelize');
const Request = require('./request.model');
const RequestAsset = require('./request_asset.model');
const RequestVersion = require('./request_version.model');

// In a real app, you should keep the database connection URL as an environment variable.
// But for this example, we will just use a local SQLite database.
// const sequelize = new Sequelize(process.env.DB_CONNECTION_URL);
const sequelize = new Sequelize('web_test', 'root', 'password', {
	dialect: 'mysql',
	host: 'localhost',
	//storage: 'sqlite-example-database/example-db.sqlite',
	logQueryParameters: true,
	benchmark: true
});

// const modelDefiners = [
// 	Request,
//     RequestAsset,
//     RequestVersion
// ];

// // We define all models according to their files.
// for (const modelDefiner of modelDefiners) {
// 	modelDefiner.initModel(sequelize);
// }
async function asyncCall() {
    await Request.initModel(sequelize);
    await RequestAsset.initModel(sequelize);
    await RequestVersion.initModel(sequelize);
}

asyncCall();

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;