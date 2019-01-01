import React, { useState } from 'react'

const Counter = () => {
	const [count, setCount] = useState(0)
	return (
		<React.Fragment>
			<h1>{count}</h1>
			<button
				type='button'
				data-testid='button'
				onClick={() => setCount(count + 1)}
			>
				{count}
			</button>
		</React.Fragment>
	)
}

export default Counter
