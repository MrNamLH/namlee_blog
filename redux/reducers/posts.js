import { ActionTypes } from '../../common/constants';

const initialState = {
	posts: [],
	post: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.GET_POSTS:
			return {
				...state,
				posts: action.posts,
			};
		case ActionTypes.VIEW_POST:
			return {
				...state,
				post: action.post,
			};
		default:
			return state;
	}
};
