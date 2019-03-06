import isProd from 'is-prod'
import LogRocket from 'logrocket'
import setupLogRocketReact from 'logrocket-react'
import Bugsnag from '@bugsnag/js'
import BugsnagReact from '@bugsnag/plugin-react'

if (isProd) {
	LogRocket.init() // setup user info
	setupLogRocketReact(LogRocket)

	Bugsnag.beforeNotify = function(data) {
		data.metaData.sessionURL = LogRocket.sessionURL
		return data
	}
}
