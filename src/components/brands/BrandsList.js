import React, { Component } from "react";
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


class BrandsList extends Component {
  render() {
    // console.log(this.props.brands);

    const { brands } = this.props;
    const brandlist = () => {
      if (brands && brands.length >= 1) {
        return brands.map((brand) => {
          return (
            
            <div key={brand.id} id={`brand_${brand.id}`}>
              <Box style={{margin: 15, textAlign: 'center'}}>
                <Link to={"/brands/" + brand.id} style={{textDecoration: 'none', color: 'black'}}><h4>{brand.name}</h4></Link><br/>
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
          {brandlist()}
        </Grid>
      </div>
    );
  }
}

export default BrandsList;


