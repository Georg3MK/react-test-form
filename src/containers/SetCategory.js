import React from 'react'
import { connect } from 'react-redux'
import { setCategory } from '../actions'

let SetCategory = ({dispatch}) => {
	return (
		<select className='set-category' onChange={e => {
			e.preventDefault()
			dispatch(setCategory(e.target.value))
		}}>
			<option value='0'>Phones</option>
			<option value='1'>Computers</option>
			<option value='2'>Power Banks</option>
			<option value='3'>Memory Cards</option>
		</select>
	)
}

SetCategory = connect()(SetCategory)

export default SetCategory