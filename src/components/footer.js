import { Layout } from 'antd';

const { Footer } = Layout;

const footer = () => (
	<div>
		<Footer style={{ textAlign: 'center' }}>
			<div>Copyright @ 2018</div>
			<style jsx>{`
				div {
					text-align: center;
				}
			`}</style>
		</Footer>
	</div>
);

export default footer;
