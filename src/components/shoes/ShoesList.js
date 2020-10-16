import React, { Component } from "react";
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';

class ShoesList extends Component {
  render() {
    const { shoes } = this.props;

    const shoelist = () => {
      if (shoes && shoes.length >= 1) {
        return shoes.map((shoe) => {
          console.log(shoe)
          return (
            <div key={shoe.id} className={`shoe_${shoe.id}`}>
              <Box style={{margin: 15, textAlign: 'center'}}>
                <Link to={"/shoes/" + shoe.id}>
                  <img src={shoe.picture} alt={shoe.name} height="110" width="160" />
                </Link>
                <Link to={"/shoes/" + shoe.id} style={{textDecoration: 'none', color: 'black'}}>{shoe.name}</Link><br/>
              </Box>
            </div>
          );
        });
      }
    };

    return (
      <div className="shoes">
        <Grid container style={{alignSelf: "center"}}>
          {shoelist()}
        </Grid>
      </div>
    );
  }
}

export default ShoesList;
