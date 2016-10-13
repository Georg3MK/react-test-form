import React from 'react'
import { connect } from 'react-redux'
import { removeProduct } from '../actions'


let RemoveButton = ({dispatch}) => {
	return (
		<input type='button'
					value='Delete'
					onClick={e => {
						e.preventDefault()
						dispatch(removeProduct(0))
					}}
		/>
	)
}

RemoveButton = connect()(RemoveButton)

export default RemoveButton