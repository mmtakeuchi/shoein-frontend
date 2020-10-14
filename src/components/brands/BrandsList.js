import React, { Component } from "react";
import { Link } from "react-router-dom";

class BrandsList extends Component {
  render() {
    // console.log(this.props.brands);
    const { brands } = this.props;
    const brandlist = () => {
      if (brands && brands.length >= 1) {
        return brands.map((brand) => {
          return (
            <div key={brand.id} id={`brand_${brand.id}`}>
              <Link to={"/brands/" + brand.id}>{brand.name}</Link><br/>
              <img
                src={brand.image}
                alt={brand.name}
                height="150"
                width="200"
              />
            </div>
          );
        });
      }
    };

    return (
      <div className="brands">
        {brandlist()}
      </div>
    );
  }
}

export default BrandsList;
