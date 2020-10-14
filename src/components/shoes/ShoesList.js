import React, { Component } from "react";
import { Link } from "react-router-dom";

class ShoesList extends Component {
  render() {
    const { shoes } = this.props;

    const shoelist = () => {
      if (shoes && shoes.length >= 1) {
        return shoes.map((shoe) => {
          return (
            <div key={shoe.id} className={`shoe_${shoe.id}`}>
                <Link to={"/shoes/" + shoe.id}>{shoe.name}</Link><br/>
                <img src={shoe.image} alt={shoe.name} height="110" width="160" />
            </div>
          );
        });
      }
    };

    return (
      <div className="shoes">
        {shoelist()}
      </div>
    );
  }
}

export default ShoesList;
