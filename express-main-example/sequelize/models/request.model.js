const { DataTypes, Model, Sequelize } = require('sequelize');

class Request extends Model
{
	static initModel(dbConn)
	{
		//TODO: Move all inits to common file
		//TOD: Add validators for all (to run at JS level) - constraints run at sql level
		Request.init({
			id: {
				type: DataTypes.UUID,
				field: "id",
				defaultValue: Sequelize.UUIDV4,
				allowNull: false,
				unique: true,
				primaryKey: true
			},

			userID: {
				type: DataTypes.UUID,
				field: "user_id",
				allowNull: false,
				unique: true
			},

			statusURL: {
				type: DataTypes.STRING,
				field: "status_tracking_url",
				validate: {
					isUrl : true
				}
			},

			type: {
				type: DataTypes.TINYINT,
				field: "type",
				allowNull: false,
				//TODO: need a validator for values
			},

			outputAssetID: {
				type: DataTypes.UUID,
				field: "output_folder_asset_id",
			},

			status: {
				type: DataTypes.TINYINT,
				field: "status",
				allowNull: false,
				//TODO: need a validator for values
			},

			errorCode: {
				type: DataTypes.TINYINT,
				field: "error_code",
				//TODO: need a validator for values
			},

			createdDate: {
				type: DataTypes.DATE,
				field: "creation_date",
				defaultValue: Sequelize.NOW
			},

			modifiedDate: {
				type: DataTypes.DATE,
				field: "modification_date",
				defaultValue: Sequelize.NOW
			},

			activeVersionID: {
				type: DataTypes.UUID,
				field: "active_version_id",
			}
		},
		{
			sequelize: dbConn,
			modelName: 'requests',
			timestamps: false
		});

		return Request.sync();
	}
}

module.exports = Request;