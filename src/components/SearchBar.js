import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { findShoe } from '../actions/shoeActions'
import SearchResults from './SearchResults'
import ShoesList from './shoes/ShoesList'

export class SearchBar extends Component {

    state = {
        query: ""
    }

    handleSearch = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.props.findShoe(this.state)
        this.setState({
            query: ""
        })

    }

    render() {
        console.log(this)
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Control type="text" name="query" placeholder="Search Shoe" value={this.state.query} onChange={this.handleSearch}/>
                </Form>
                <Route path={`/shoesearch/result?query=${this.state.query}`} />
                {/* <SearchResults shoes={this.props.shoes}/> */}
                <ShoesList shoes={this.props.shoes}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({shoes: state.shoes})

const mapDispatchToProps = (dispatch) => ({
    findShoe: shoe => dispatch(findShoe(shoe))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
