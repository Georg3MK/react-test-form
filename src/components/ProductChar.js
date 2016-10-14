import React, { PropTypes } from 'react'

const ProductChar = ({ char }) => (
	<li>
		{char.field} : {char.value}
	</li>
)

ProductChar.propTypes = {
	char:PropTypes.shape({
		field: PropTypes.string.isRequired,
		value: PropTypes.string.isRequired
	}).isRequired
}
export default ProductChar