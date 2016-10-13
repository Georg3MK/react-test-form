import React, { PropTypes } from 'react'
import Product from './Product'

const ProductList = ({ products }) => (
	<ul className='products-list'>
			{products.map(product => 
				<Product key={product.id} {...product} />
			)}
	</ul>
)

ProductList.propTypes = {
	products:PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		product: PropTypes.string.isRequired
	})).isRequired
}

export default ProductList
