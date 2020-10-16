import React, { Component } from 'react'
import {Grid, Box} from '@material-ui/core';
import { Collapse, Button } from 'react-bootstrap'
import EditButton from '../EditButton'

class Shoe extends Component {

    handleDeleteClick = (id) => {
        this.props.deleteShoe(id);
        this.props.history.push("/shoes")
    }

    handleEditClick = (shoe) => {
    }

    // const [open, setOpen] = useState(false);
    
    render() {

        if (this.props.shoes && this.props.shoes.length >= 1) {
            const shoe = this.props.shoes.find(shoe => shoe.id === parseInt(this.props.match.params.id, 10))
            
            return (
                <div id={shoe.id} style={{display: 'flex', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                    <Grid style={{alignSelf: "center"}}>
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

                            <Button onClick={() => this.handleDeleteClick(shoe.id)}>Delete Shoe</Button>
                            <EditButton shoe={shoe} brands={this.props.brands}/>
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
