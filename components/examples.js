import React from 'react';
import getConfig from 'next/config';
import Link from 'next/link';
import { connect } from 'react-redux';
import { List, Avatar, Button, Spin, Icon } from 'antd';

import { loadAllPosts } from '../redux/actions/posts';

const {
	publicRuntimeConfig: { PUBLIC_VALUE },
	serverRuntimeConfig: { SERVER_ONLY },
} = getConfig();

const IconText = ({ type, text }) => (
	<span>
		<Icon type={type} style={{ marginRight: 8 }} />
		{text}
	</span>
);

class Examples extends React.Component {
	state = {
		loading: false,
		loadingMore: false,
		showLoadingMore: true,
		data: this.props.posts,
	};

	componentWillMount() {
		// this.props.loadAllPosts();
	}

	componentDidMount() {
		// this.getData(res => {
		// 	this.setState({
		// 		loading: false,
		// 		data: res.results,
		// 	});
		// });
	}

	componentWillReceiveProps(nextProps) {}

	onLoadMore = () => {
		this.setState({
			loadingMore: true,
		});
		const data = []; // this.state.data.concat(loadAllPosts);
		this.setState(
			{
				data,
				loadingMore: false,
			},
			() => {
				// Resetting window's offsetTop so as to display react-virtualized demo underfloor.
				// In real scene, you can using public method of react-virtualized:
				// https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
				window.dispatchEvent(new Event('resize'));
			}
		);

		/* this.getData(res => {
			const data = this.state.data.concat(res.results);
			this.setState(
				{
					data,
					loadingMore: false,
				},
				() => {
					// Resetting window's offsetTop so as to display react-virtualized demo underfloor.
					// In real scene, you can using public method of react-virtualized:
					// https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
					window.dispatchEvent(new Event('resize'));
				}
			);
		}); */
	};

	getData = callback => {
		callback(this.props.posts);
		// reqwest({
		// 	url: fakeDataUrl,
		// 	type: 'json',
		// 	method: 'get',
		// 	contentType: 'application/json',
		// 	success: res => {
		// 		callback(res);
		// 	},
		// });
	};

	render() {
		console.log('PUBLIC_VALUE', PUBLIC_VALUE);
		console.log('SERVER_ONLY', SERVER_ONLY);

		const { loading, loadingMore, showLoadingMore, data } = this.state;
		const loadMore = showLoadingMore ? (
			<div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
				{loadingMore && <Spin />}
				{!loadingMore && <Button onClick={this.onLoadMore}>Loading more</Button>}
			</div>
		) : null;

		return (
			<List
				// bordered="true"
				style={{ minHeight: '350px' }}
				loading={loading}
				itemLayout="vertical"
				size="large"
				loadMore={loadMore}
				dataSource={data}
				renderItem={item => (
					<List.Item
						key={item.gender}
						actions={[
							<IconText type="star-o" text="156" />,
							<IconText type="like-o" text="156" />,
							<IconText type="message" text="2" />,
						]}>
						<List.Item.Meta
							avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
							title={
								<Link href={`/post?id=${item.id}`} as={`/p/${item.id}`}>
									<a>{item.title}</a>
								</Link>
							}
							description={`create: ${item.createdDate}, update: ${item.updatedDate}`}
						/>
						<div>{item.content}</div>
					</List.Item>
				)}
			/>
		);
	}
}

function mapStateToProps(state) {
	const { posts } = state.postReducer;

	return { posts };
}

export default connect(
	mapStateToProps
	// { loadAllPosts }
)(Examples);
