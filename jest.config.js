module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	setupTestFrameworkScriptFile: require.resolve('./test/jest.setup.js'),
	moduleNameMapper: {
		'\\.module\\.css$': 'identity-obj-proxy',
		'\\.css$': require.resolve('./test/style-mock.js'),
	},
	collectCoverageFrom: ['**/src/**/*.js'],
}
