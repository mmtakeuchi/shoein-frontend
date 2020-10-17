import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import { connect } from 'react-redux'

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

        console.log(this.state)
        this.setState({
            query: ""
        })
    }

    render() {
        // console.log(this)
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Control type="text" name="query" placeholder="Search Shoe" value={this.state.query} onChange={this.handleSearch}/>
                </Form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    // findShoe: shoe => dispatch(findShoe(shoe))
})

export default connect(null, mapDispatchToProps)(SearchBar)
