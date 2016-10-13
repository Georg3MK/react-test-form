import React, { PropTypes } from 'react'
import RemoveButton from '../containers/RemoveButton'

const Product = ({ product, id }) => (
	<li>
		<div className='product'>
			{product}
		</div>
		<RemoveButton id={id} />
	</li>
)

Product.propTypes = {
	product: PropTypes.string.isRequired
}

export default Product