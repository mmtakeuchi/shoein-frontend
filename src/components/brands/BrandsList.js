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
              <div>
                <Link to={"/brands/" + brand.id}>{brand.name}</Link>
              </div>
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
      <div>
        <div>{brandlist()}</div>
      </div>
    );
  }
}

export default BrandsList;
