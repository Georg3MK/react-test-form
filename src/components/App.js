import React from 'react'
import AddForm from '../containers/AddForm'
import SetCategory from '../containers/SetCategory'
import ShownProducts from '../containers/ShownProducts'

const App = () => (
	<div>
		<h1>Let's add some gooods to our store!</h1>
		<SetCategory />
		<AddForm />
		<ShownProducts />
	</div>
)
export default App


