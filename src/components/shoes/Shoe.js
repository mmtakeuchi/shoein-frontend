import React from 'react'

const Shoe = (props) => {
    console.log(props)
    if (props.shoes && props.shoes.length >= 1) {
        const shoe = props.shoes.find(shoe => shoe.id === parseInt(props.match.params.id, 10))
        // console.log(shoe)
        return (
            <div id={shoe.id}>
                <h3>{shoe.name}</h3>
                <img src={shoe.image} alt={shoe.name} height="250" width="300"/>
                <div>{shoe.color}</div>
                <div>{shoe.size}</div>
                <div>{shoe.condition}</div>
            </div>
        )
    }

    return (
        <div>
           Shoe 
        </div>
    )
}

export default Shoe;