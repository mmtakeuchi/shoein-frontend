import React, { Component } from "react";
import { Grid, Select, InputLabel, TextField, Box, FormControl, Input} from '@material-ui/core';


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
            <div style={{ padding: 16, margin: 'auto', maxWidth: '100%' }}>
                
                <form onSubmit={this.handleSubmit} >
                <Grid container spacing={2} alignItems="flex-start" >
                    <Grid item xs={6}>
                        <FormControl>
                        <InputLabel htmlFor="name">Name:   </InputLabel>
                        <Input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                        </FormControl>
                    </Grid>

                    <Grid item xs={6}>
                        <InputLabel htmlFor="picture">Picture:</InputLabel>
                        <TextField type="string" name="picture" value={this.state.picture} onChange={this.handleChange} style={{width: 300}}/>
                    </Grid>

                    <Grid item xs={6}>
                        <InputLabel htmlFor="color">Color:</InputLabel>
                        <TextField type="text" name="color" value={this.state.color} onChange={this.handleChange} style={{width: 300}}/>
                    </Grid>

                    <Grid item xs={6}>
                        <InputLabel htmlFor="size">Size:</InputLabel>
                        <TextField type="number" name="size" value={this.state.size} onChange={this.handleChange} style={{width: 300}}/>
                    </Grid>

                    <Grid item xs={6}>
                        <InputLabel htmlFor="condition">Condition:</InputLabel>
                        <TextField type="text" name="condition" value={this.state.condition} onChange={this.handleChange} style={{width: 300}}/>
                    </Grid>

                    <Grid item xs={6}>
                        <InputLabel htmlFor="brand_id">Brand: </InputLabel>
                        <Select name="brand_id" value={this.state.brand_id} onChange={this.handleChange} style={{width:300}}>
                            {this.props.brands.map(brand => (
                                <option key={brand.id} value={brand.id}>{brand.name}</option>
                            ))}
                        </Select><br/>
                    </Grid>

                    <input type="submit" value="Create Shoe" />
                </Grid>
                </form>
            </div>
        );
    }
}

export default ShoeForm;