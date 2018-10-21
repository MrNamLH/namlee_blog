import React from 'react';
import { Layout, Breadcrumb, Icon, Divider } from 'antd';

class breadcrumb extends React.Component {
	render() {
		return (
			<div>
				<Breadcrumb style={{ margin: '16px 0', background: '#ffffff' }}>
					<Breadcrumb.Item href="/">
						<Icon type="home" />
					</Breadcrumb.Item>
					<Breadcrumb.Item href="/">
						<Icon type="user" />
						<span>Post</span>
					</Breadcrumb.Item>
					<Breadcrumb.Item>PostID</Breadcrumb.Item>
				</Breadcrumb>
			</div>
		);
	}
}

export default breadcrumb;
