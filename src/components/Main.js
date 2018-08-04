import React from 'react';
import { Layout, Icon, Divider, Row, Col, Affix, Button } from 'antd';
import Breadcrumb from './breadcrumb';
import SiderLeft from './sider_left';
import SiderRight from './slider_right';

const { Sider, Content } = Layout;

class Main extends React.Component {
	state = {
		top: 70,
	};

	render() {
		return (
			<div
				ref={node => {
					this.container = node;
				}}>
				<Layout
					style={{
						justifyContent: 'center',
						padding: '0 50px',
					}}>
					<Row type="flex" justify="center" align="top">
						<Col
							style={{ display: 'flex', justifyContent: 'flex-end', padding: 10, margin: 5 }}
							xs={{ span: 0 }}
							sm={{ span: 0 }}
							md={{ span: 4 }}
							lg={{ span: 4 }}
							xl={{ span: 4 }}
							xxl={{ span: 4 }}>
							<Affix offsetTop={this.state.top}>
								<SiderLeft />
							</Affix>
						</Col>
						<Col
							style={{ display: 'flex', justifyContent: 'center' }}
							xs={{ span: 24 }}
							sm={{ span: 24 }}
							md={{ span: 15 }}
							lg={{ span: 15 }}
							xl={{ span: 15 }}
							xxl={{ span: 15 }}>
							<Content
								style={{
									background: '#ffffff',
									padding: '0 24px 24px',
									marginTop: 5,
									minHeight: '80vh',
								}}>
								<Breadcrumb />
								<Divider />
								{this.props.children}
							</Content>
						</Col>
						<Col
							style={{ padding: 10, margin: 5, backgroundColor: '#ffffff' }}
							xs={{ span: 0 }}
							sm={{ span: 0 }}
							md={{ span: 4 }}
							lg={{ span: 4 }}
							xl={{ span: 4 }}
							xxl={{ span: 4 }}>
							<Affix offsetTop={this.state.top}>
								<SiderRight />
							</Affix>
						</Col>
					</Row>
				</Layout>
			</div>
		);
	}
}

export default Main;
