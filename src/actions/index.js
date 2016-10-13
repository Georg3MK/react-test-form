let nextProduct = 0

export const addProduct = (product) => ({
	type: 'ADD_PRODUCT',
	id: nextProduct++,
	product
})

export const setCategory = (category) => ({
	type: 'SET_CATEGORY',
	category
})

export const removeProduct = (id) => ({
	type: 'REMOVE_PRODUCT',
	id
})


