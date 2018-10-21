import React from 'react';
import Link from 'next/link';

import { Layout, Button, Icon, Row, Col, Avatar } from 'antd';

const { Header } = Layout;

const Nav = () => (
	<Header style={{ backgroundColor: 'white' }}>
		<Row type="flex" justify="space-around" align="middle">
			<Col xs={{ span: 0 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 6 }} xl={{ span: 6 }} xxl={{ span: 6 }}>
				<Link prefetch href="/">
					<Icon type="smile" spin="true" className="logo" />
				</Link>
			</Col>
			<Col
				className="flex justify_center"
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
				className="flex justify_flex_end"
				xs={{ span: 10 }}
				sm={{ span: 6 }}
				md={{ span: 6 }}
				lg={{ span: 6 }}
				xl={{ span: 6 }}
				xxl={{ span: 6 }}>
				<Avatar shape="square" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
				<Button href="/" type="dashed" className="margin_left_8">
					Sign Out
				</Button>
			</Col>
			<style jsx global>{`
				.flex {
					display: flex;

					&.justify_center {
						justify-content: center;
					}

					&.justify_flex_end {
						justify-content: flex-end;
					}
				}
				.margin_left_8 {
					margin-left: 8px;
				}
				.logo {
					vertical-align: middle;
					font-size: 32px;
					color: #08c;
				}
			`}</style>
		</Row>
	</Header>
);

export default Nav;
