import React from 'react'
import { render, fireEvent, getByText } from 'react-testing-library'
import Counter from '../Components/Counter'

test('counter increments by 1', () => {
	const { getByTestId } = render(<Counter />)
	const button = getByTestId('button')
	fireEvent.click(button)
	expect(button).toHaveTextContent(1)
})
