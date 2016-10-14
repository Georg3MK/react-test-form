import React from 'react'
import { connect } from 'react-redux'
import { addProduct } from '../actions'
import OptionBlock from '../components/OptionBlock'

const mapStateToProps = (state) => ({
	category: state.category
})

let AddForm = ({dispatch, category}) => {
	let product = {}, indivOptsCounter = 0

	return (
		<form className='add-product' onSubmit={e => {
			e.preventDefault()
			let productData = {
				category: category.name,
				model: product.model.value,
				chars:[
					{
						field: 'manufacturer',
						value: product.manufacturer.value
					},{
						field: 'price',
						value: product.price.value
					},{
						field: 'quantity',
						value: product.quantity.value
					},{
						field: 'supplier',
						value: product.supplier.value//
					},{
						field: 'supplyDate',
						value: product.supplyDate.value
					}
				]
			}
			//for (var k in productData) {
			//	if (productData.hasOwnProperty(k)) {
			//		if (!productData[k].trim()) return
			//	}
			//}
			dispatch(addProduct(productData))
		}}>
			<div>
				<h2>Common options</h2>
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
			<div>
				<h2>Individual options</h2>
				{category.options.map(option =>
					<OptionBlock key={category.name + indivOptsCounter++} option={option} />
				)}
			</div>
			<input type='submit'
						value='Add to Stock' />
		</form>
	)
}

AddForm = connect(
	mapStateToProps
)(AddForm)

export default AddForm
