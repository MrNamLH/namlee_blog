/* eslint-disable */
const withCss = require('@zeit/next-css');
const withESLint = require('next-eslint');

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
	require.extensions['.css'] = file => {};
}

module.exports = withESLint(
	withCss({
		webpack: (config, options) => {
			// Fixes npm packages that depend on `fs` module
			config.node = {
				fs: 'empty',
			};

			return config;
		},
		distDir: '../build',
	})
);
