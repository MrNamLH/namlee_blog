import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withReduxStore from '../lib/with-redux-store';

class MyApp extends App {
	componentDidCatch(error, errorInfo) {
		console.log('CUSTOM ERROR HANDLING', error);

		// This is needed to render errors correctly in development / production
		super.componentDidCatch(error, errorInfo);
	}

	render() {
		const { Component, pageProps, reduxStore } = this.props;
		return (
			<Container>
				<Provider store={reduxStore}>
					<Component {...pageProps} />
				</Provider>
			</Container>
		);
	}
}

export default withReduxStore(MyApp);
