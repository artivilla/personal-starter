import React, { Component } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 100;
		src: url('../assets/fonts/Inter-Thin-BETA.woff2') format('woff2'),
			url('../assets/fonts/Inter-Thin-BETA.woff') format('woff');
	}
	@font-face {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 200;
	src: url('../assets/fonts/Inter-ExtraLight-BETA.woff2') format('woff2'),
		url('../assets/fonts/Inter-ExtraLight-BETA.woff') format('woff');
	}
	@font-face {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 300;
	src: url('../assets/fonts/Inter-Light-BETA.woff2') format('woff2'),
		url('../assets/fonts/Inter-Light-BETA.woff') format('woff');
	}
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
		font-family: 'Inter'
		font-weight: 300;
		font-style: normal;
	}
	a {
		text-decoration: none
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
				<div>
					<GlobalStyle />
					<p>Inter UI font</p>
				</div>
			</ThemeProvider>
		)
	}
}
