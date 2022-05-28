const { Painter, Painting } = require("../models");

const resolvers = {
	Query: {
		painters: async () => {
			return await Painter.find({}).populate("paintings");
		},
		paintings: async () => {
			return await Painting.find({});
		},
		painter: async (parent, { args }) => {
			return await Painter.findById(args.id).populate("paintings");
		},
		painting: async (parent, args) => {
			return await Painting.findOne(args.title);
		},
	},
	Mutation: {
		addPainter: async (parent, { artist, country }) => {
			return await Painter.create({ artist, country });
		},
		addPainting: async (parent, { paintingArtist, title, style }) => {
			const painting = await Painting.create({ title, style, paintingArtist });

			const painterToUpdate = await Painter.findOne({ artist: paintingArtist });

			painterToUpdate.paintings.push(painting);
			const updatedPainter = await painterToUpdate.save();
			return updatedPainter;
		},
		removePainter: async (parent, { painterId }) => {
			return await Painter.findOneAndDelete({ _id: painterId });
		},
		removePainting: async (parent, { paintingId }) => {
			return await Painting.findOneAndDelete({ _id: paintingId });
		},
	},
};

module.exports = resolvers;
