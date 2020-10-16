import React, { Component } from "react";
import { Grid, Select, Input, TextField} from '@material-ui/core';


class ShoeForm extends Component {
    
    state = {
        name: "",
        picture: "",
        color: "",
        size: "",
        condition: "",
        brand_id: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.addShoe(this.state)

        this.setState({
            name: "",
            picture: "",
            color: "",
            size: "",
            condition: "",
            brand_id: ""
        })

        this.props.history.push("/shoes")
    }

    render() {
        // console.log(this.props.brands)
        return (
            <React.Fragment>
                <Grid style={{textAlign: "center"}}>
                <form onSubmit={this.handleSubmit} >
                    <label htmlFor="name">Name:   </label>
                    <Input type="text" name="name" value={this.state.name} onChange={this.handleChange} /><br/>

                    <label htmlFor="picture">Picture:</label>
                    <TextField type="string" name="picture" value={this.state.picture} onChange={this.handleChange} /><br/>

                    <label htmlFor="color">Color:</label>
                    <TextField type="text" name="color" value={this.state.color} onChange={this.handleChange} /><br/>

                    <label htmlFor="size">Size:</label>
                    <TextField type="number" name="size" value={this.state.size} onChange={this.handleChange} /><br/>

                    <label htmlFor="condition">Condition:</label>
                    <TextField type="text" name="condition" value={this.state.condition} onChange={this.handleChange} /><br/>

                    <label htmlFor="brand_id">Brand: </label>
                    <Select name="brand_id" value={this.state.brand_id} onChange={this.handleChange}>
                        {this.props.brands.map(brand => (
                            <option key={brand.id} value={brand.id}>{brand.name}</option>
                        ))}
                    </Select><br/>

                    <input type="submit" value="Create Shoe" />
                </form>
                </Grid>
            </React.Fragment>
        );
    }
}

export default ShoeForm;