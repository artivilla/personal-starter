module.exports = {
	linters: {
		'**/*.js': ['jest --findRelatedTests'],
		'**/*.js': ['xo src/'],
		'**/*.+(js|jsx|css|less|scss|md|graphql|mdx)': ['prettier --write'],
	},
	ignore: ['*.config.js'],
}
