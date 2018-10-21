import React from 'react';
import { Layout, Affix, BackTop } from 'antd';

import PageHead from './page_head';
import Nav from './nav';
import Main from './Main';
import Footer from './footer';
import PostContainer from './PostsContainer';

class layout extends React.PureComponent {
	render() {
		return (
			<div>
				<Layout>
					<PageHead title={this.props.title} />
					{/* <Affix> */}
					<Nav />
					{/* </Affix> */}
					<Main>{this.props.children}</Main>
					<Footer />
				</Layout>
				<BackTop />
			</div>
		);
	}
}

export default layout;
