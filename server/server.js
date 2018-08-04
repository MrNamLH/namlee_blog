/* eslint-disable */
/* https://medium.com/codingthesmartway-com-blog/creating-a-graphql-server-with-node-js-and-express-f6dddc5320e1 */

const express = require('express');
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');

// GraphQL schema
const schema = buildSchema(`
    type Query {
        post(id: Int!): Post
        posts(content: String): [Post]
    },
    type Mutation {
		updatePostContent(id: Int!, content: String!): Post
    },
    type Post {
        id: Int
        title: String
        author: String
        content: String
        category: String
        url: String
    }
`);

const postsData = [
	{
		id: 1,
		title: 'The Complete Node.js Developer Course!!',
		author: 'Andrew Mead, Rob Percival!!',
		content: 'Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!',
		category: 'Node.js',
		url: 'https://codingthesmartway.com/courses/nodejs/',
	},
	{
		id: 2,
		title: 'Node.js, Express & MongoDB Dev to Deployment',
		author: 'Brad Traversy',
		content: 'Learn by example building & deploying real-world Node.js applications from absolute scratch',
		category: 'Node.js',
		url: 'https://codingthesmartway.com/courses/nodejs-express-mongodb/',
	},
	{
		id: 3,
		title: 'JavaScripts: Understanding The Weird Parts',
		author: 'Anthony Alicea',
		content:
			'An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.',
		category: 'JavaScript',
		url: 'https://codingthesmartway.com/courses/understand-javascript/',
	},
];
// posts.fields.courseImage.fields.file.url
// posts.fields.title
const getPost = function(args) {
	const id = args.id;
	return postsData.filter(post => post.id == id)[0];
};

const getPosts = function(args) {
	debugger;
	if (args.category) {
		const category = args.category;
		return postsData.filter(post => post.category === category);
	}
	return postsData;
};

const updatePostCategory = function({ id, category }) {
	postsData.map(post => {
		if (post.id === id) {
			post.category = category;
			return post;
		}
	});
	return postsData.filter(post => post.id === id)[0];
};

const root = {
	post: getPost,
	posts: getPosts,
	updatePostCategory,
};
// Create an express server and a GraphQL endpoint
const app = express();
app.use(
	'/api',
	express_graphql({
		schema,
		rootValue: root,
		graphiql: false,
	})
);

app.use(
	'/graphql',
	express_graphql({
		schema,
		rootValue: root,
		graphiql: true,
	})
);
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
