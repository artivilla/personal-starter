#! /usr/bin/env node

const findVersions = require('find-versions')
const execa = require('execa')
const eol = require('eol')

;(async () => {
	const { stdout } = await execa.shell(
		'git diff HEAD^ -- "$(git rev-parse --show-toplevel)"/package.json',
	)
	const lines = eol.split(stdout)
	const newPkgVersion = lines.filter(line =>
		line.match(/.*\+.*[""']version[""'].*/),
	)
	if (newPkgVersion.length > 0) {
		const versionNumber = findVersions(newPkgVersion[0])[0]
		const isCanaryRelease = versionNumber.includes('canary')
		const isDryRun = process.argv
			.slice(2)
			.map(arg => arg.includes('-d') || arg.includes('--dry-run'))[0]
		try {
			if (!isDryRun) {
				await execa.shell(
					`git tag -a v${versionNumber} -m 'Auto tagging ${
						isCanaryRelease ? 'with canary' : null
					} v${versionNumber}'`,
				)
			}
			console.log(`Succesfully tagged v${versionNumber}`)
		} catch (error) {
			console.log(
				`Issues git tagging v${versionNumber} Retry npm run upgrade-tags`,
				error,
			)
		}
	}
})()
