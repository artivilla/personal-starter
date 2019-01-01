import React from 'react'
import ReactDOMServer from 'react-dom/server'
import loadable from 'react-loadable'
import Counter from '../components/Counter'

test('should render Counter on server', async () => {
	await loadable.preloadAll()
	ReactDOMServer.renderToString(<Counter />)
})
