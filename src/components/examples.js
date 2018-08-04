import { connect } from 'react-redux';
import React from 'react';

/* function Examples({ posts }) {
	return <div>{console.log(`======= Examples (posts): ${posts}`)}</div>;
} */

class Examples extends React.Component {
	render() {
		return <div>{this.props.posts[0].title}</div>;
	}
}

function mapStateToProps(state) {
	const { posts } = state.postReducer.state;

	return { posts };
}

export default connect(mapStateToProps)(Examples);
