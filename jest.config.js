module.exports = {
	...require('./test/jest.common'),
	collectCoverageFrom: ['**/src/**/*.js'],
	coverageThreshold: {
		global: {
			statements: 50,
			braches: 100,
			functions: 100,
			lines: 50,
		},
	},
	projects: ['./test/jest.client.js', './test/jest.server.js'],
}
