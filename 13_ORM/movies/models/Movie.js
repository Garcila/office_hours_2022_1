const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our User model
class Movie extends Model {}

Movie.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		genere: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		director: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		release_year: {
			type: DataTypes.INTEGER,
		},
		rating_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "movie",
	}
);

module.exports = Movie;
