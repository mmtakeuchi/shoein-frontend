import React, { Component } from 'react'

export class SearchBar extends Component {

    state = {
        search: ""
    }

    handleSearch = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.setState({
            search: ""
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="search">Search</label>
                    <input type="text" name="search" onChange={this.handleSearch}/>
                    <input type="submit" value="Search" />
                </form>
            </div>
        )
    }
}

export default SearchBar
