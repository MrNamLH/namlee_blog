/*eslint-disable */
import React, { Component } from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';

import { getPost } from '../redux/actions/posts';
import Layout from '../components/layout';
import PostDetail from '../components/post_detail';

class Post extends Component {
	static getInitialProps({ reduxStore, req, query: { id } }) {
		// query: { id } | context
		const isServer = !!req;

		// const { id } = context.query;
		reduxStore.dispatch(getPost(id));

		return {};
	}

	render() {
		console.log(this.props);
		console.log(this.props.router.query.id);
		return (
			<div>
				<Layout>
					<PostDetail />
				</Layout>
			</div>
		);
	}
}

export default withRouter(Post);
