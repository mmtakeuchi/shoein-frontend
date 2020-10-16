import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import { getBrands } from '../actions/brandActions'
import { getShoes } from '../actions/shoeActions'
import BrandsList from '../components/brands/BrandsList'
import Brand from '../components/brands/Brand'
import ShoesContainer from './ShoesContainer'


export class BrandsContainer extends Component {

    componentDidMount = () => {
        this.props.getBrands()
        this.props.getShoes()
    }

    render() {
        // console.log(this.props.brands.brands)
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/shoes" render={(props) => <ShoesContainer {...props} brands={this.props.brands.brands}/>} />
                    <Route path="/brands/:id" render={(props) => <Brand {...props} brands={this.props.brands.brands} shoes={this.props.shoes.shoes}/>} />
                    <Route exact path="/brands" render={(props) => <BrandsList {...props} brands={this.props.brands.brands} />} />
                </Switch>
            </React.Fragment>
        )
    }
}

const mapStateFromProps = (state) => ({ 
    brands: state.brands,
    shoes: state.shoes
})

const mapDispatchToProps = (dispatch) => ({
    getBrands: () => dispatch(getBrands()),
    getShoes: () => dispatch(getShoes())
})

export default connect(mapStateFromProps, mapDispatchToProps)(BrandsContainer)
