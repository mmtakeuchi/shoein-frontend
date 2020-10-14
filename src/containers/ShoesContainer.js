import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import { getShoes } from '../actions/shoeActions'
// import ShoesList from '../components/shoes/ShoesList'
// import Shoe from '../components/shoes/Shoe'

export class ShoesContainer extends Component {

    componentDidMount = () => {
        this.props.getShoes()
    }

    render() {
        console.log(this.props.shoes.shoes)
        return (
            <div>
                World
            </div>
        )
    }
}

const mapStateToProps = (state) => ({shoes: state.shoes})

const mapDispatchToProps = (dispatch) => ({
    getShoes: () => dispatch(getShoes())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoesContainer);
