import React from 'react'
import { Link } from 'react-router-dom'

const BrandsList = ({brands}) => {
    console.log(brands)
    console.log(brands.map(brand => brand.name))
    
    if (brands && brands.length >= 1) {
        return brands.map(brand => {
            return (
                <div key={brand.id} id={brand.id}>
                    <div><Link to={'/brands/' + brand.id}>{brand.name}</Link></div>
                    <img src={brand.image} alt={brand.name}/>
                </div>
        )})
    }

        return (
            <div>
                No Brands
            </div>
        )
    // }
    
}

export default BrandsList;
