let cats = [
	{
		name: 'phones',
		type: 'category',
		options: [
			{
				name: 'size',
				type: 'block',
				options: [
					{
						name: 'length',
						type: 'field',
						placeholder: '211mm'
					},{
						name: 'width',
						type: 'field',
						placeholder: '100mm'
					},{
						name: 'height',
						type: 'field',
						placeholder: '9mm'
					}
				]
			},{
				name: 'battery',
				type: 'block',
				options: [
					{
						name: 'type',
						type: 'field',
						placeholder: 'li-ion'
					},{
						name: 'capacity',
						type: 'field',
						placeholder: '10000 mA/h'
					},{
						name: 'removable',
						type: 'select',
						opts: ['yes', 'no']
					}
				]
			},{
				name: 'memory',
				type: 'field',
				placeholder: '3Gb'
			},{
				name: 'screen',
				type: 'field',
				placeholder: '6.2 inch'
			},{
				name: 'camera',
				type: 'block',
				options: [
					{
						name: 'matrix',
						type: 'field',
						placeholder: '12 mega pixels'
					},{
						name: 'resolution',
						type: 'field',
						placeholder: '1920 x 1080'
					},{
						name: 'autofocus',
						type: 'select',
						opts: ['yes', 'no']
					}
				]
			}
		]
	},
	{
		name: 'computers',
		type: 'category',
		options: [
			{
				name: 'type',
				type: 'field',
				placeholder: 'monoblock'
			},{
				name: 'processor',
				type: 'block',
				options: [
					{
						name: 'core-number',
						type: 'field',
						placeholder: '4'
					},{
						name: 'frequency',
						type: 'field',
						placeholder: '3.1 GHz'
					},{
						name: 'architecture',
						type: 'select',
						opts: ['x86', 'x64']
					}
				]
			},{
				name: 'RAM',
				type: 'block',
				options: [
					{
						name: 'type',
						type: 'field',
						placeholder: 'DDR3'
					},{
						name: 'capacity',
						type: 'field',
						placeholder: '4Gb'
					},{
						name: 'frequency',
						type: 'field',
						placeholder: '1600 Hz'
					}
				]
			},{
				name: 'video',
				type: 'block',
				options: [
					{
						name: 'manufacturer',
						type: 'field',
						placeholder: 'nvidia'
					},{
						name: 'memory',
						type: 'block',
						options: [
							{
								name: 'type',
								type: 'field',
								placeholder: 'DDR5'
							},{
								name: 'capacity',
								type: 'field',
								placeholder: '3Gb'
							},{
								name: 'frequency',
								type: 'field',
								placeholder: '1284 Hz'
							}
						]
					},{
						name: 'directx',
						type: 'field',
						placeholder: '12'
					}
				]
			}, {
				name: 'HDD',
				type: 'field',
				options: '2Tb'
			}
		]
	},
	{
		name: 'power-banks',
		type: 'category',
		options: [
			{
				name: 'capacity',
				type: 'field',
				placeholder: '12000 mA/h'
			},{
				name: 'inputs',
				type: 'field',
				placeholder: '3'
			},{
				name: 'size',
				type: 'block',
				options: [
					{
						name: 'length',
						type: 'field',
						placeholder: '198mm'
					},{
						name: 'width',
						type: 'field',
						placeholder: '99mm'
					},{
						name: 'height',
						type: 'field',
						placeholder: '2.2mm'
					}
				]
			},{
				name: 'material',
				type: 'field',
				placeholder: 'steel'
			}
		]
	},
	{
		name: 'memory-cards',
		type: 'category',
		options: [
			{
				name: 'capacity',
				type: 'field',
				placeholder: '64Gb'
			},{
				name: 'type',
				type: 'field',
				placeholder: 'microSD'
			},{
				name: 'speed',
				type: 'field',
				placeholder: '90 Mb/sec'
			}
		]
	}
]

const category = (state, action) => {
	switch (action.type) {
		case 'ADD_PRODUCT':
			return {
				name: action.name,
				type: 'category',
				product: action.options
			}
		default:
			return state
	}
}

const categories = (state = cats[0], action) => {
	switch (action.type) {
		case 'ADD_CATEGORY':
			return [
				...cats,   // update local variable (temporary option)
				category(undefined, action)
			]
		case 'SET_CATEGORY':
			console.log(cats[action.category])
			return cats[action.category]
		default:
			return state
	}
}

export default categories