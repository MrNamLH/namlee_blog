/*eslint-disable*/
import React from 'react';
import { List, Avatar, Button, Spin, Icon } from 'antd';
import reqwest from 'reqwest';

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

const IconText = ({ type, text }) => (
	<span>
		<Icon type={type} style={{ marginRight: 8 }} />
		{text}
	</span>
);

class PostComponent extends React.Component {
	state = {
		loading: true,
		loadingMore: false,
		showLoadingMore: true,
		data: [],
	};

	componentDidMount() {
		this.getData(res => {
			this.setState({
				loading: false,
				data: res.results,
			});
		});
	}

	getData = callback => {
		reqwest({
			url: fakeDataUrl,
			type: 'json',
			method: 'get',
			contentType: 'application/json',
			success: res => {
				callback(res);
			},
		});
	};

	onLoadMore = () => {
		this.setState({
			loadingMore: true,
		});
		this.getData(res => {
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
		});
	};

	render() {
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
							title={<a href="https://ant.design">{item.name.last}</a>}
							description="Ant Design, a design language for background applications, is refined by Ant UED Team"
						/>
						<div>
							We supply a series of design principles, practical patterns and high quality design
							resources (Sketch and Axure), to help people create their product prototypes beautifully and
							efficiently.
						</div>
					</List.Item>
				)}
			/>
		);
	}
}

export default PostComponent;
