const path = require('path')

module.exports = {
	...require('./jest.common'),
	testEnvironment: 'jest-environment-jsdom',
	setupTestFrameworkScriptFile: require.resolve('./jest.setup.js'),
	coverageDirectory: path.join(__dirname, '../coverage/client'),
	coverageThreshold: {
		global: {
			statements: 50,
			braches: 100,
			functions: 100,
			lines: 50,
		},
	},
}
