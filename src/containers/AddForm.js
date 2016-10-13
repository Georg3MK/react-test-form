import React from 'react'
import { connect } from 'react-redux'
import { addProduct } from '../actions'
import { setCategory } from '../actions'

let AddForm = ({dispatch}) => {
	let product = {
		manufacturer:'',
		model:'',
		price:'',
		quantity:'',
		supplier:'',
		supplyDate:''
	}

	return (
		<form onSubmit={e => {
			e.preventDefault()
			if (!product.value.trim()) {
				return
			}
			dispatch(addProduct(product.value))
		}}>
			<input type='text'
						className='product'
						placeholder='Product manufacturer'
						ref={node => { product.manufacturer = node }}/>
			<input type='text'
						className='product'
						placeholder='Product model'
						ref={node => { product.model = node }}/>
			<input type='text'
						className='product'
						placeholder='Product price'
						ref={node => { product.price = node }}/>
			<input type='text'
						className='product'
						placeholder='Product quantity'
						ref={node => { product.quantity = node }}/>
			<input type='text'
						className='product'
						placeholder='Product supplier'
						ref={node => { product.supplier = node }}/>
			<input type='text'
						className='product'
						placeholder='Product supply date'
						ref={node => { product.supplyDate = node }}/>
			<input type='submit'
						value='Add to Stock' />
			<input type='button' value='get' onClick={e => {
				e.preventDefault()
				dispatch(setCategory(2))
			}} />
		</form>
	)
}

AddForm = connect()(AddForm)

export default AddForm
