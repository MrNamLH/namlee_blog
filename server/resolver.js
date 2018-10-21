const mongoose = require('mongoose');

const Post = mongoose.model('Post');

module.exports = {
	Query: {
		getAllPosts: () => Post.find(),
		getPostById: async (parent, args) => Post.findById(args.id),
	},
	Mutation: {
		newPost: async (parent, args) => {
			const newPost = new Post(args);
			return newPost.save();
		},
		deletePost: async (parent, { id }) =>
			// You can destructure the args
			Post.findByIdAndRemove(id),
		updatePost: async (parent, { id: _id, ...doc }) => {
			Post.update({ _id }, doc);
			return { _id, ...doc };
		},
	},
};
