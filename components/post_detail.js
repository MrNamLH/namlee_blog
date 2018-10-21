import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Tag } from 'antd';

class PostDetail extends Component {
	render() {
		return (
			<div>
				<h2>{this.props.post.title}</h2>
				<div>created: {this.props.post.createdDate}</div>
				<div>
					{this.props.post.tag.map(tag => (
						<Tag color="blue" key={tag}>
							<a href="#">{tag}</a>
						</Tag>
					))}
				</div>

				<div>{this.props.post.content}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { post } = state.postReducer;

	return { post };
}

export default connect(mapStateToProps)(PostDetail);
