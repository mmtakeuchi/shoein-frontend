import React, { Component } from 'react'

export class SearchBar extends Component {
    render() {
        return (
            <div>
                <form>
                    <label htmlFor="search">Search</label>
                    <input type="text" name="search"/>
                    <input type="submit" value="Search" />
                </form>
            </div>
        )
    }
}

export default SearchBar
