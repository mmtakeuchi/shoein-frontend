const shoeURL = "http://localhost:3001/shoes/"

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
               picture: shoe.picture,
               color: shoe.color,
               size: shoe.size,
               condition: shoe.condition,
               brand_id: shoe.brand_id
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
        .then(shoe => console.log(shoe))
    }
}

export const deleteShoe = (shoeId) => {
    return (dispatch) => {
        fetch(shoeURL + shoeId, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(data => dispatch({type: 'DELETE_SHOE', shoeId}))
    }
}

