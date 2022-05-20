const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Rating model
class Rating extends Model {}

// create fields/columns for Rating model
Rating.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		rating: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "rating",
	}
);

module.exports = Rating;
