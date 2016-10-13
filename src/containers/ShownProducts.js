import { connect } from 'react-redux'
import ProductsList from '../components/ProductsList'

const mapStateToProps = (state) => ({
	products: state.products
})

const ShownProducts = connect(
	mapStateToProps
)(ProductsList)

export default ShownProducts
