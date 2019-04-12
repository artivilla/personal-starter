import React, { Component } from 'react'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'

injectGlobal`
  html {
    box-sizing: border-box;
    font-sizing: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
`

const theme = {
	whiteVista: '#FCF8F7',
	blueViolet: '#2E46B6',
	blackShaft: '#333333',
	redJaponica: '#C76D59',
	greyIron: '#CDCDCD',
	pinkBlossom: '#EBAEBA',
	greenPhlatho: '#123123',
}

export default class App extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<div />
			</ThemeProvider>
		)
	}
}
