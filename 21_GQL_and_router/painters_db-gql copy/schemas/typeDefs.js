const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type Painter {
		_id: ID
		artist: String
		country: String
		paintings: [Painting]
	}

	type Painting {
		_id: ID
		title: String
		style: String
		paintingArtist: String
	}

	type Query {
		painters: [Painter]
		paintings: [Painting]
		painter(id: ID!): Painter
		painting(tile: String!): Painting
	}

	type Mutation {
		addPainter(artist: String!, country: String!): Painter
		addPainting(
			paintingArtist: String!
			title: String!
			style: String!
		): Painting
		removePainter(painterId: ID!): Painter
		removePainting(paintingId: ID!): Painting
	}
`;

module.exports = typeDefs;
