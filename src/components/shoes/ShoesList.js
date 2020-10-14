// import React from 'react'
// import { Link } from 'react-router-dom'
// import Brand from '../brands/Brand'

// // need to use .jpg for images

// const ShoesList = ({shoes}) => {
//     // console.log(shoes)

//     if (shoes && shoes.length >= 1) {
//         return shoes.map(shoe => {
//             return (
//                 <div key={shoe.id} className={`shoe_${shoe.id}`}>
//                     <div><Link to={'/shoes/' + shoe.id}>{shoe.name}</Link></div>
//                     <img src={shoe.image} alt={shoe.name} height="110" width="160"/>
//                 </div>
//         )})
//     }

//     return (
//         <div>
//             Hello Shoes List
//         </div>
//     )
// }

// export default ShoesList;

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
              <div>
                <Link to={"/shoes/" + shoe.id}>{shoe.name}</Link>
              </div>
              <img src={shoe.image} alt={shoe.name} height="110" width="160" />
            </div>
          );
        });
      }
    };

    return (
      <div>
        <div>{shoelist()}</div>
      </div>
    );
  }
}

export default ShoesList;
