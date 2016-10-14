import React, { PropTypes } from 'react'
import ProductChar from './ProductChar'
import RemoveButton from '../containers/RemoveButton'

let counter = 0

const Product = ({ product, id }) => (
	<li>
		<div className='product-view'>
			<h3>{product.model}</h3>
			<h4>{product.category}</h4>
			<ul>
				{product.chars.map(char =>
					<ProductChar key={product.model + counter++} char={char}/>
				)}
			</ul>
		</div>
		<RemoveButton id={id} />
	</li>
)

Product.propTypes = {
	product: PropTypes.object.isRequired
}

export default Product