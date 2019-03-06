import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter'

const bugsnagClient = bugsnag(`'${BUGSNAG_CLIENT_TOKEN}'`)
bugsnagClient.use(bugsnagReact, React)

// wrap your entire app tree in the ErrorBoundary provided
const ErrorBoundary = bugsnagClient.getPlugin('react')
ReactDOM.render(
	<ErrorBoundary>
		<Counter />
	</ErrorBoundary>,
	document.getElementById('app'),
)
