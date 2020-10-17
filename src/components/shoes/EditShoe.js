import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editShoe } from '../../actions/shoeActions'
import {Container, Form, Button} from 'react-bootstrap'

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
    }

    render() {
        // console.log(this)
        return (
            <div style={{marginTop:"20px", border: 'solid'}}>
                <Container>
                    <Form onSubmit={this.handleSubmit} >
                        
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

export default connect(null, {editShoe})(EditShoe)
