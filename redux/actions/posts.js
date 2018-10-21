/*eslint-disable*/
import { ActionTypes } from '../../common/constants';

const postsData = [
	{
		id: 1,
		title: 'The Complete Node.js Developer Course!!',
		description: 'description short key',
		author: 'Andrew Mead, Rob Percival!!',
		content: 'Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!',
		feature_img: 'http://image.com/image.jpg',
		category: 'Node.js',
		tag: ['nodejs', 'react'],
		claps: 12,
		view: 2,
		comments: [
			{
				author: 'Brad Traversy',
				content: 'test comment',
			},
			{
				author: 'Brad Traversy 2',
				content: 'test comment 2',
			},
		],
		createdDate: '2018/01/01',
		updatedDate: '2018/02/02',
	},
	{
		id: 2,
		title: 'How to make code clearly',
		description: 'description short key',
		author: 'ARob Percival!!',
		content: ' A applications with Node, Express, MongoDB, Mocha, and more!',
		feature_img: 'http://image.com/image.jpg',
		category: 'Java',
		tag: ['nodejs', 'react'],
		claps: 5,
		view: 8,
		comments: [
			{
				author: 'Brad Traversy',
				content: 'test comment',
			},
			{
				author: 'Brad Traversy 2',
				content: 'test comment 2',
			},
		],
		createdDate: '2018/01/01',
		updatedDate: '2018/02/02',
	},
];

/* const loadAllPosts = () => {
	return {
		type: ActionTypes.GET_POSTS,
		posts: postsData,
	};
}; */
/* const loadAllPosts = () => {
	return dispatch => {
		dispatch({ type: ActionTypes.GET_POSTS, posts: postsData });
	};
}; */
const loadAllPosts = () => dispatch => {
	return dispatch({ type: ActionTypes.GET_POSTS, posts: postsData });
};

function getPost(postId) {
	const post = postsData.filter(post => post.id == postId).shift();

	return {
		type: ActionTypes.VIEW_POST,
		post: post,
	};
}

export { loadAllPosts, getPost };
