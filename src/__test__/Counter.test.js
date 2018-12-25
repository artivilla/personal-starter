import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Counter from '../Components/Counter'

test('counter increments by 1', () => {
	const { container } = render(<Counter />)
	const button = container.find(button)
	fireEvent.click(button)
	expect(button.textContainer).toBe(1)
})
