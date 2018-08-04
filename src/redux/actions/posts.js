/*eslint-disable*/
import { ActionTypes } from '../../common/constants';

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

const loadAllPosts = () => {
	// debugger;
	return {
		type: ActionTypes.GET_POSTS,
		posts: postsData,
	};
};
/* const loadAllPosts = () => {
	return dispatch => {
		dispatch({ type: ActionTypes.GET_POSTS, posts: postsData });
	};
}; */
/* const loadAllPosts = () => dispatch => {
	debugger;
	return dispatch({ type: ActionTypes.GET_POSTS, posts: postsData });
};
 */
function getPost(postId) {
	const post = postsData.filter(post => post.id === postId);

	return {
		type: ActionTypes.VIEW_POST,
		post: post,
	};
}

export { loadAllPosts, getPost };
