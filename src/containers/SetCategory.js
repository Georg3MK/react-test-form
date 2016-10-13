import React from 'react'
import { connect } from 'react-redux'
import { setCategory } from '../actions'

let SetCategory = ({dispatch}) => {
	return (
		<select onChange={e => {
			e.preventDefault()
			console.log(e.target.value)
			dispatch(setCategory(0))
		}}>
			<option value='phones'>Phones</option>
			<option value='computers'>Computers</option>
			<option value='power-banks'>Power Banks</option>
			<option value='memory-cards'>Memory Cards</option>
		</select>
	)
}

SetCategory = connect()(SetCategory)

export default SetCategory