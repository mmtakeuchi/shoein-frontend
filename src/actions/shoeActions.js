const shoeURL = "http://localhost:3001/shoes"

export const getShoes = () => {
    return (dispatch) => {
        fetch(shoeURL)
        .then(resp => resp.json())
        .then(shoes => dispatch({type: 'GET_SHOES', shoes}))
    }
}

export const addShoe = (shoe) => {
    return (dispatch) => {
        console.log(shoe)
        const strongParams = {
            shoe: {
               name: shoe.name,
               image: shoe.image,
               color: shoe.color,
               size: shoe.size,
               condition: shoe.condition,
               brand_id: shoe.brand
            }
        }
        fetch(shoeURL, {
            method: "POST",
            headers: {
                "Accepts": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(strongParams)
        })
        .then(resp => resp.json())
        .then(shoe => dispatch({type: 'ADD_SHOE', shoe}))
    }
}

