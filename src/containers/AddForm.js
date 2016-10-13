import React from 'react'
import { connect } from 'react-redux'
import { addProduct } from '../actions'

let AddForm = ({dispatch}) => {
	let product = {}

	return (
		<form className='add-product' onSubmit={e => {
			e.preventDefault()
			let productData = {
				manufacturer: product.manufacturer.value,
				model: product.model.value,
				price: product.price.value,
				quantity: product.quantity.value,
				supplier: product.supplier.value,
				supplyDate: product.supplyDate.value
			}
			for (var k in productData) {
				if (productData.hasOwnProperty(k)) {
					if (!productData[k].trim()) return
				}
			}
			dispatch(addProduct(productData))
		}}>
			<div>
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
			</div>
			<input type='submit'
						value='Add to Stock' />
		</form>
	)
}

AddForm = connect()(AddForm)

export default AddForm
