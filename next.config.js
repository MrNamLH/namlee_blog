/* eslint-disable */
const withProgressBar = require('next-progressbar');
const withESLint = require('next-eslint');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config');
const withPurgeCss = require('next-purgecss');
const nextRuntimeDotenv = require('next-runtime-dotenv');

const withConfig = nextRuntimeDotenv({
	public: ['PUBLIC_VALUE'],

	server: ['SERVER_ONLY'],
});

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
	require.extensions['.css'] = file => {};
}

module.exports = withConfig(
	withPurgeCss(
		withProgressBar(
			withESLint(
				withSass(
					withCSS({
						progressBar: {
							profile: true,
						},
						// distDir: '/build',
						// cssModules: true,
						// cssLoaderOptions: {
						// 	importLoaders: 1,
						// 	localIdentName: '[local]___[hash:base64:5]',
						// },
						webpack: (config, options) => {
							config = commonsChunkConfig(config, /\.(sass|scss|css)$/);

							// Fixes npm packages that depend on `fs` module
							config.node = {
								fs: 'empty',
							};

							return config;
						},
						onDemandEntries: {
							// period (in ms) where the server will keep pages in the buffer
							maxInactiveAge: 25 * 1000,
							// number of pages that should be kept simultaneously without being disposed
							pagesBufferLength: 2,
						},
					})
				)
			)
		)
	)
);
