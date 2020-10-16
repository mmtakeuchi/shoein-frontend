import React, { Component } from 'react'
import {Grid, Box} from '@material-ui/core';
import { Button, Figure } from 'react-bootstrap'
import EditButton from '../EditButton'

class Shoe extends Component {

    handleDeleteClick = (id) => {
        this.props.deleteShoe(id);
        this.props.history.push("/shoes")
    }
    
    render() {

        if (this.props.shoes && this.props.shoes.length >= 1) {
            const shoe = this.props.shoes.find(shoe => shoe.id === parseInt(this.props.match.params.id, 10))
            
            return (
                <div id={shoe.id} style={{display: 'flex', justifyContent:'center', alignItems:'center', textAlign:'center', margin:'20px'}}>
                    <Figure style={{alignSelf: "center"}}>
                        <Figure.Image src={shoe.picture} alt={shoe.name} height="250" width="300"/><br/>
                        <Figure.Caption><h3>{shoe.name}</h3></Figure.Caption>
                        <Figure.Caption>
                            <div>{shoe.color}</div>
                            <div>{shoe.size}</div>
                            <div>{shoe.condition}</div>
                        </Figure.Caption><br/>
                        
                            <Button onClick={() => this.handleDeleteClick(shoe.id)}>Delete Shoe</Button>
                            <EditButton shoe={shoe} brands={this.props.brands}/>
                        
                    </Figure>
                </div>
            )
        } else {
            return (
                <div>
                    No Shoe Found
                </div>
            )
        }
    }
}

export default Shoe
