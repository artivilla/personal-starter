import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Counter from '../components/Counter'

test('counter increments by 1', () => {
	const { getByTestId } = render(<Counter />)
	const button = getByTestId('button')
	fireEvent.click(button)
	expect(button).toHaveTextContent(1)
})
