const Request = require('./request.model');

const { Sequelize, DataTypes, Model } = require('sequelize');

class RequestAsset extends Model
{
    static initModel(dbConn)
	{
        //TODO: Move all inits to common file
        //TOD: Add validators for all (to run at JS level) - constraints run at sql level
        RequestAsset.init({
            assetId: {
                type: DataTypes.UUID,
                field: "asset_id",
                allowNull: false
            },

            requestId: {
                type: DataTypes.UUID,
                field: "request_id",
                allowNull: false,
                references: {
                    model: Request,
                    key: 'id',
                },
                onDelete: Sequelize.CASCADE
                //onUpdate
            }
        },
        {
            sequelize: dbConn,
            modelName: "request_asset",
            timestamps: false
        });

       // RequestAsset.belongsTo(Request);
        return RequestAsset.sync({force:true});
    }
}

module.exports = RequestAsset;