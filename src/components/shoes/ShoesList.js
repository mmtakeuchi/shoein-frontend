import React from 'react'
import { Link } from 'react-router-dom'
import Brand from '../brands/Brand'

// need to use .jpg for images 

const ShoesList = ({shoes}) => {
    // console.log(shoes)

    if (shoes && shoes.length >= 1) {
        return shoes.map(shoe => {
            return (
                <div key={shoe.id} className={`shoe_${shoe.id}`}>
                    <div><Link to={'/shoes/' + shoe.id}>{shoe.name}</Link></div>
                    <img src={shoe.image} alt={shoe.name} height="250" width="300"/>
                </div>
        )})
    }

    return (
        <div>
            Hello Shoes List
        </div>
    )
}

export default ShoesList;