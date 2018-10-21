import React from 'react';
import { connect } from 'react-redux';
import { loadAllPosts } from '../redux/actions/posts';

import Layout from '../components/layout';
import PostContainer from '../components/PostsContainer';
import Nav from '../components/nav';
import Examples from '../components/examples';
import '../static/index.scss';

class Index extends React.Component {
	componentDidMount() {
		const { dispatch } = this.props;
	}

	static getInitialProps({ reduxStore, req }) {
		const isServer = !!req;
		reduxStore.dispatch(loadAllPosts());

		return {};
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<Layout>
					<Examples />
				</Layout>
			</div>
		);
	}
}

export default connect()(Index);
