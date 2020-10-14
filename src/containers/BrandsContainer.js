import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import { getBrands } from '../actions/brandActions'
import BrandsList from '../components/brands/BrandsList'
import Brand from '../components/brands/Brand'
import ShoesContainer from './ShoesContainer'


export class BrandsContainer extends Component {

    componentDidMount = () => {
        this.props.getBrands()
    }

    render() {
        // console.log(this.props.brands.brands)
        return (
            <div>
                <Switch>
                    <Route path="/shoes" render={(props) => <ShoesContainer {...props} brands={this.props.brands.brands}/>} />
                    <Route path="/brands/:id" render={(props) => <Brand {...props} brands={this.props.brands.brands}/>} />
                    <Route exact path="/brands" render={(props) => <BrandsList {...props} brands={this.props.brands.brands} />} />
                </Switch>
            </div>
        )
    }
}

const mapStateFromProps = (state) => ({ brands: state.brands })

const mapDispatchToProps = (dispatch) => ({
    getBrands: () => dispatch(getBrands())
})

export default connect(mapStateFromProps, mapDispatchToProps)(BrandsContainer)
