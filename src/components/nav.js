import React from 'react';
import Link from 'next/link';

import { Layout, Menu, Breadcrumb, Button, Icon, Row, Col, Avatar } from 'antd';

const { Header } = Layout;

const Nav = () => (
	<Header style={{ backgroundColor: '#ffffff' }}>
		<Row type="flex" justify="space-around" align="middle">
			<Col xs={{ span: 0 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 6 }} xl={{ span: 6 }} xxl={{ span: 6 }}>
				<Link prefetch href="/">
					<Icon type="smile" spin="true" style={{ verticalAlign: 'middle', fontSize: 32, color: '#08c' }} />
				</Link>
			</Col>
			<Col
				style={{ display: 'flex', justifyContent: 'center' }}
				xs={{ span: 14 }}
				sm={{ span: 6 }}
				md={{ span: 6 }}
				lg={{ span: 6 }}
				xl={{ span: 6 }}
				xxl={{ span: 6 }}>
				<Link href="/">
					<a>NONSENSE</a>
				</Link>
			</Col>
			<Col
				style={{ display: 'flex', justifyContent: 'flex-end' }}
				xs={{ span: 10 }}
				sm={{ span: 6 }}
				md={{ span: 6 }}
				lg={{ span: 6 }}
				xl={{ span: 6 }}
				xxl={{ span: 6 }}>
				<Avatar shape="circle" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
				<Button style={{ marginLeft: 8 }} href="/" type="dashed">
					Sign Out
				</Button>
			</Col>
		</Row>
	</Header>
);

export default Nav;
