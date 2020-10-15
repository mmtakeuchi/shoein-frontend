import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editShoe } from '../../actions/shoeActions'

class EditShoe extends Component {
    state = {
        name: this.props.shoe.name,
        picture: this.props.shoe.picture,
        color: this.props.shoe.color,
        size: this.props.shoe.size,
        condition: this.props.shoe.condition,
        brand_id: this.props.shoe.brand_id
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        let shoe = {...this.state, id: this.props.shoe.id}
        this.props.editShoe(shoe)

        // this.setState({
        //     name: "",
        //     picture: "",
        //     color: "",
        //     size: "",
        //     condition: "",
        //     brand_id: 1
        // })
    }

    render() {
        // console.log(this)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:   </label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /><br/>

                    <label htmlFor="picture">Picture:</label>
                    <input type="string" name="picture" value={this.state.picture} onChange={this.handleChange} /><br/>

                    <label htmlFor="color">Color:</label>
                    <input type="text" name="color" value={this.state.color} onChange={this.handleChange} /><br/>

                    <label htmlFor="size">Size:</label>
                    <input type="number" name="size" value={this.state.size} onChange={this.handleChange} /><br/>

                    <label htmlFor="condition">Condition:</label>
                    <input type="text" name="condition" value={this.state.condition} onChange={this.handleChange} /><br/>

                    <label htmlFor="brand_id">Brand: </label>
                    <select name="brand_id" value={this.state.brand_id} onChange={this.handleChange}>
                        {this.props.brands.map(brand => (
                            <option key={brand.id} value={brand.id}>{brand.name}</option>
                        ))}
                    </select><br/>

                    <input type="submit" value="Create Shoe" />
                </form>
            </div>
        );
    }
}

export default connect(null, {editShoe})(EditShoe)
