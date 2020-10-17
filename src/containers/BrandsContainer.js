import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import BrandsList from '../components/brands/BrandsList'
import Brand from '../components/brands/Brand'
import ShoesContainer from './ShoesContainer'


export class BrandsContainer extends Component {

    render() {
        console.log(this.props)
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

export default BrandsContainer
