import React, { Component } from "react";
import {Container, Form, Button} from 'react-bootstrap'


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
            <div style={{marginTop:"20px", border: 'solid'}}>
                <Container>
                    <Form onSubmit={this.handleSubmit} style={{margin:"10px"}}>
                    
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Shoe Name" name="name" value={this.state.name} onChange={this.handleChange}/> 
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="string" placeholder="Image" name="picture" value={this.state.picture} onChange={this.handleChange}/> 
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Color</Form.Label>
                            <Form.Control type="text" placeholder="Shoe Color" name="color" value={this.state.color} onChange={this.handleChange}/> 
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Size</Form.Label>
                            <Form.Control type="number" placeholder="Shoe Size" name="size" value={this.state.size} onChange={this.handleChange}/> 
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Condition</Form.Label>
                            <Form.Control type="text" placeholder="Shoe Condition" name="condition" value={this.state.condition} onChange={this.handleChange}/> 
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Brand</Form.Label>
                            <Form.Control as="select" name="brand_id" value={this.state.brand_id} onChange={this.handleChange}>
                                {this.props.brands.map(brand => (
                                    <option key={brand.id} value={brand.id}>{brand.name}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Add Shoe
                        </Button>
        
                    </Form>
                </Container> 
            </div>
        );
    }
}

export default ShoeForm;