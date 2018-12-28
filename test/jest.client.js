const path = require('path')

module.exports = {
	...require('./jest.common'),
	displayName: 'client',
	testEnvironment: 'jest-environment-jsdom',
	setupTestFrameworkScriptFile: require.resolve('./jest.setup.js'),
	testMatch: ['**/__tests__/**/*.js'],
}
