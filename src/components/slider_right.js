import React from 'react';
import { Card, Icon, Avatar } from 'antd';

class siderRight extends React.Component {
	render() {
		return (
			<div>
				<Card
					// cover={
					// 	<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
					// }
					type="inner"
					style={{ backgroundColor: '#ffffff' }}
					actions={[<Icon type="star-o" />, <Icon type="usergroup-add" />, <Icon type="form" />]}>
					<Card.Meta
						avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
						title="John Mitch"
						description="This is the description"
					/>
					<style jsx>{`
						.ant-card-actions {
							background-color: #ffffff;
						}
					`}</style>
				</Card>
			</div>
		);
	}
}

export default siderRight;
