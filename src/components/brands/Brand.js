import React from 'react'

const Brand = (props) => {
    // console.log(props.brands)
    // console.log(props)
    // console.log(props.brands.filter(brand => brand.id === parseInt(props.match.params.id, 10)))

    if (props.brands && props.brands.length >= 1) {
        const brand = props.brands.find(brand => brand.id === parseInt(props.match.params.id, 10))
        // console.log(brand)
        return (
            <div>
                <h3>{brand.name}</h3>
                <img src={brand.image} alt={brand.name}/>
            </div>
        )
    }

    return (
        <div>
           Brand 
        </div>
    )
}

export default Brand;

