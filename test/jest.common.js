const path = require('path')

module.exports = {
	rootDir: path.join(__dirname, '..'),
	moduleNameMapper: {
		'\\.module\\.css$': 'identity-obj-proxy',
		'\\.css$': require.resolve('./style-mock.js'),
	},
	collectCoverageFrom: ['**/src/**/*.js'],
	watchPlugins: [
		'jest-watch-typeahead/filename',
		'jest-watch-typeahead/testname',
	],
	coveragePathIgnorePatterns: [
		'node_modules/',
		'/__tests__',
		'/__server_tests__/',
	],
}
