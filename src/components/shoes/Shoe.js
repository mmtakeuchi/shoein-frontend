import React, { Component } from 'react'
import EditShoe from './EditShoe'
import {Grid, Box} from '@material-ui/core';

class Shoe extends Component {

    handleDeleteClick = (id) => {
        this.props.deleteShoe(id);
        this.props.history.push("/shoes")
    }

    handleEditClick = (shoe) => {
        // console.log(shoe)
    }

    
    render() {
        // console.log(this)
        if (this.props.shoes && this.props.shoes.length >= 1) {
            const shoe = this.props.shoes.find(shoe => shoe.id === parseInt(this.props.match.params.id, 10))
            
            return (
                <div id={shoe.id} style={{display: 'flex', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                    <Grid block style={{alignSelf: "center"}}>
                        <Grid item>

                            <h3>{shoe.name}</h3>
                            <img src={shoe.picture} alt={shoe.name} height="250" width="300"/>
                        </Grid>

                        <Grid item>
                            <div>{shoe.color}</div>
                            <div>{shoe.size}</div>
                            <div>{shoe.condition}</div>

                        </Grid>
                        <Box style={{margin: 15, textAlign: 'center'}}>

                            <button onClick={() => this.handleDeleteClick(shoe.id)}>Delete Shoe</button>
                            <button onClick={() => this.handleEditClick(shoe)}>Edit Shoe</button>
                            <EditShoe shoe={shoe} brands={this.props.brands}/>
                        </Box>
                    </Grid>
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
