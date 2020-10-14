import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBrands } from '../actions/brandActions'

export class BrandsContainer extends Component {

    componentDidMount = () => {
        this.props.getBrands()
        console.log(this.props)
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateFromProps = (state) => ({ brands: state.brands })

const mapDispatchToProps = (dispatch) => ({
    getBrands: () => dispatch(getBrands())
})

export default connect(mapStateFromProps, mapDispatchToProps)(BrandsContainer)
