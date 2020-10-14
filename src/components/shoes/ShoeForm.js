import React, { Component } from "react";

class ShoeForm extends Component {
    
    state = {
        name: "",
        image: "",
        color: "",
        size: "",
        condition: "",
        brand_id: 1
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log(this.props.brands)
        event.preventDefault();

        this.props.addShoe(this.state)

        this.setState({
            name: "",
            image: "",
            color: "",
            size: "",
            condition: "",
            brand_id: 1
        })
    }

    render() {
        // console.log(this.props.brands)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:   </label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /><br/>

                    <label htmlFor="image">Image:</label>
                    <input type="text" name="image" value={this.state.image} onChange={this.handleChange} /><br/>

                    <label htmlFor="color">Color:</label>
                    <input type="text" name="color" value={this.state.color} onChange={this.handleChange} /><br/>

                    <label htmlFor="size">Size:</label>
                    <input type="text" name="size" value={this.state.size} onChange={this.handleChange} /><br/>

                    <label htmlFor="condition">Condition:</label>
                    <input type="text" name="condition" value={this.state.condition} onChange={this.handleChange} /><br/>

                    <label htmlFor="brand_id">Brand: </label>
                    <select value={this.state.brand_id} onChange={this.handleChange}>
                        {this.props.brands.map(brand => (
                            <option key={brand.id} name="brand_id" value={brand.id}>{brand.name}</option>
                        ))}
                    </select><br/>

                    <input type="submit" value="Create Shoe" />
                </form>
            </div>
        );
    }
}

export default ShoeForm;