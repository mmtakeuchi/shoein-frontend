import React, { Component } from "react";
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box'


class BrandsList extends Component {
  render() {
    // console.log(this.props.brands);

    const { brands } = this.props;
    const brandlist = () => {
      if (brands && brands.length >= 1) {
        return brands.map((brand) => {
          return (
            
            <div key={brand.id} id={`brand_${brand.id}`}>
              <Box style={{margin: 20}}>
                <h4 text-align="center">{brand.name}</h4><br/>
                <Link to={"/brands/" + brand.id}><img
                src={brand.picture}
                alt={brand.name}
                height="100"
                width="150"/>
                </Link>
              </Box>
            </div>
           
          );
        });
      }
    };

    return (
      <div className="brands">
        <Grid container style={{alignSelf: "center", padding: 6}}>
        {/* <Box
        display="flex" 
        width={500} height={80} 
        bgcolor="lightblue"
      >
        <Box m="auto">
          1. Box (margin: auto)
        </Box>
      </Box>
      <Box 
        display="flex" 
        width={500} height={80} 
        bgcolor="lightgreen"
        alignItems="center"
        justifyContent="center"
      >
        2. Box (alignItems and justifyContent)
      </Box> */}
       
          {brandlist()}
        
      
          
        </Grid>
      </div>
    );
  }
}

export default BrandsList;


