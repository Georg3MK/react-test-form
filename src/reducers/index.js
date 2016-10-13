import { combineReducers } from 'redux'
import category from './category.js'
import products from './products.js'

const combinedReducer = combineReducers({
	category,
	products
})

export default combinedReducer
