import React from "react";
import { Link } from "react-router-dom"
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
      <div id={brand.id}>
        
        <h3>{brand.name}</h3>
        <img src={brand.picture} alt={brand.name} />
        {shoes.map(shoe => {
          return (
            <div key={shoe.id}>
              <Link to={"/shoes/" + shoe.id}>{shoe.name}</Link><br/>
              <img src={shoe.picture} alt={shoe.name} height="250" width="300"/>
            </div>
          )
        })}
      </div>
    );
  }

  return <div>Brand</div>;
};

export default Brand;
