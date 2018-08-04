import React from 'react';
import { connect } from 'react-redux';
import { loadAllPosts } from '../redux/actions/posts';

import Layout from '../components/layout';
import PostContainer from '../components/PostsContainer';
import Nav from '../components/nav';
import Examples from '../components/examples';

class Index extends React.Component {
	componentDidMount() {
		const { dispatch } = this.props;
	}

	componentWillUnmount() {
		console.log(`++++++++++++ componentWillUnmount : ${Object.keys(this.state)}`);
	}

	static getInitialProps({ reduxStore, req }) {
		// debugger;
		const isServer = !!req;
		reduxStore.dispatch(loadAllPosts());

		return {};
	}

	render() {
		// debugger;
		console.log(this.props);
		return (
			<div>
				<Layout title="NamLee Blog">
					<Examples />
				</Layout>
			</div>
		);
	}
}
export default connect()(Index);
