import React, { PropTypes } from 'react'

let selectCounter = 0,
	subOptionCounter = 0

function optionSwitcher (option){
	switch (option.type) {
		case 'field':
			return (
				<div>
					<span>{option.name}</span> : <input type='rext' placeholder={option.placeholder}/>
				</div>
			)
		case 'select':
			return (
				<div>
					<span>{option.name}</span> : <select>
						{option.opts.map(opt =>
							<option key={option.name + selectCounter++} value={opt}>
								{opt}
							</option>)}
					</select>
				</div>
			)
		case 'block':
			return ( <div className='options-block'>
				<h3>{option.name}</h3>
				<ul>
					{option.options.map(option =>
						<li key={option.name + subOptionCounter++}>
							{optionSwitcher(option)}
						</li>
					)}
				</ul>
			</div> )
		default:
			return (<input type='rext'/>)
	}
}

const OptionBlock = ({option}) => {
	return optionSwitcher(option)
}

OptionBlock.propTypes = {
	option: PropTypes.shape({
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		placeholder: PropTypes.string,
		options: PropTypes.arrayOf(PropTypes.object),
		opts: PropTypes.arrayOf(PropTypes.string)
	}).isRequired
}

export default OptionBlock