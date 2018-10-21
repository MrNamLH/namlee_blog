import React from 'react';
import { Icon, Affix } from 'antd';

class siderLeft extends React.Component {
	render() {
		return (
			<div style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column' }}>
				<div>
					<Icon
						type="like-o"
						style={{ verticalAlign: 'middle', fontSize: 22, color: '#08c', paddingRight: '5px' }}
					/>
					<span style={{ verticalAlign: 'middle' }}> 555 </span>
				</div>
				<div>
					<Icon type="twitter" />
				</div>
				<div>
					<Icon type="google-plus" />
				</div>
				<style jsx>{`
					.icon {
						vertical-align: 'middle';
						//font-size: 22,
						//color: red,
						//padding-right: '5px'
					}
				`}</style>
			</div>
		);
	}
}

export default siderLeft;
