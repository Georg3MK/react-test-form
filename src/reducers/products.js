const product = (state, action) => {
	switch (action.type) {
		case 'ADD_PRODUCT':
			return {
				id: action.id,
				product: action.product
			}
		case 'REMOVE_PRODUCT':
			if (state.id !== action.id) {
				return state
			}
			return {
				...state,
				product: 'I\'ve been removed...'
			}
		default:
			return state
	}
}

const products = (state = [], action) => {
	switch (action.type) {
		case 'ADD_PRODUCT':
			return [
				...state,
				product(undefined, action)
			]
		case 'REMOVE_PRODUCT':
			return state.map(t =>
				product(t, action)
			)
		default:
			return state
	}
}

export default products
