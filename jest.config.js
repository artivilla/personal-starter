module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	setupTestFrameworkScriptFile: require.resolve('./test/jest.setup.js'),
	moduleNameMapper: {
		'\\.css$': require.resolve('./test/style-mock.js'),
	},
}
