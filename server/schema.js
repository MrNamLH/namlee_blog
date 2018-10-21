module.exports = `
	type Query{
		getAllPosts: [Post]
		getPostById(id: String!): Post
	}
	type Mutation{
		newPost(createdDate: String!, title:String!, author:String!, content: String!, tag: String!): Post!
		deletePost(id:String!): Post
		updatePost(createdDate: String!, title:String!, author:String!, content: String!, tag: String!, id:String!): Post!
	}
	type Post{
		_id: String!
		createdDate: String!
		title: String!
		author: String!
		content: String!
		tag: String!
	}
`;
