import React, { Component } from 'react'

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

        this.setState({
            query: ""
        })
    }

    render() {
        // console.log(this)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="query">Search  </label>
                    <input type="text" name="query" placeholder="Search Shoe" onChange={this.handleSearch}/>
                    <input type="submit" value="Search" />
                </form>
            </div>
        )
    }
}

export default SearchBar
