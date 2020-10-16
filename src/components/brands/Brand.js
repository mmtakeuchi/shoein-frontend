import React from "react";
import { Link } from "react-router-dom"
import Box from '@material-ui/core/Box'
// import ShoesContainer from '../../containers/ShoesContainer'

const Brand = (props) => {
  // console.log(props.brands)

  if (props.brands && props.brands.length >= 1) {
    const brand = props.brands.find(
      (brand) => brand.id === parseInt(props.match.params.id, 10)
    );

    const shoes = props.shoes.filter(shoe => shoe.brand_id === brand.id)
    // console.log(shoes)
    // console.log(brand)
    return (
      <div id={brand.id} display="flex">
        <Box style={{textAlign: "center", mx: "auto"}}>
          <h3 text-align="center">{brand.name}</h3>
          <img src={brand.picture} alt={brand.name} height="200" width="300"/>
        </Box>

        <div style={{margin: 40, fontWeight: 'bold', fontSize: 19}}>Results <span style={{color: '#0000CC'}}>{shoes.length}</span></div>

        {shoes.map(shoe => {
          return (
            <div key={shoe.id}>
              <Box m={5}>
                <h3><Link to={"/shoes/" + shoe.id} style={{ textDecoration: 'none', color: 'black', textAlign: 'center' }}>{shoe.name}</Link></h3>
                <Link to={"/shoes/" + shoe.id}><img src={shoe.picture} alt={shoe.name} height="150" width="200"/></Link>
              </Box>
            </div>
          )
        })}
      </div>
    );
  }

  return <div>Brand</div>;
};

export default Brand;
