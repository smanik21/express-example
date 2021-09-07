const Request = require('./request.model');
const { Sequelize, DataTypes, Model } = require('sequelize');

class RequestVersion extends Model
{
    static initModel(dbConn)
	{
        //TODO: Move all inits to common file
        //TOD: Add validators for all (to run at JS level) - constraints run at sql level
        RequestVersion.init({
            id: {
                type: DataTypes.INTEGER,
                field: "id",
                autoIncrement: true,
                primaryKey: true
            },

            originalRequestId: {
                type: DataTypes.UUID,
                field: "original_request_id",
                allowNull: false,
                references: {
                    model: Request,
                    key: 'id',
                },
                onDelete: Sequelize.CASCADE
                //onUpdate
            },

            modifiedRequestId: {
                type: DataTypes.UUID,
                field: "modified_request_id",
                allowNull: false,
                references: {
                    model: Request,
                    key: 'id',
                },
                unique: true,
                onDelete: Sequelize.CASCADE
                //onUpdate
            },
        },
        {
            sequelize: dbConn,
            modelName: "request_version",
            timestamps: false
        });

        return RequestVersion.sync({force:true});
    }
}

module.exports = RequestVersion;