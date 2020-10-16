import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Grid, Box, Card, CardMedia, CardContent} from '@material-ui/core';


class BrandsList extends Component {
  render() {
    // console.log(this.props.brands);

    const { brands } = this.props;
    const brandlist = () => {
      if (brands && brands.length >= 1) {
        return brands.map((brand) => {
          
          return (
            
            <div key={brand.id} id={`brand_${brand.id}`}>
              {/* <Box style={{margin: 15, textAlign: 'center'}}> */}
                <Card style={{maxWidth: 300, margin: 'auto'}}>
                  {/* <CardMedia 
                  image={
            "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
          }
                  // src={brand.picture}
                  alt={brand.name}
                 /> */}
                 <CardMedia
          image={
            "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
          }
        />
                 <CardContent>
                  <Link to={"/brands/" + brand.id} style={{textDecoration: 'none', color: 'black'}}><h4>{brand.name}</h4></Link><br/>
                  </CardContent>
                </Card>
              {/* </Box> */}
            </div>
           
          );
        });
      }
    };

    return (
      <div className="brands">
        <Grid >
          {brandlist()}
        </Grid>
      </div>
    );
  }
}

export default BrandsList;


