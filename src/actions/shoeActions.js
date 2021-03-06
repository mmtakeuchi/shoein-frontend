const shoeURL = "http://localhost:3001/shoes"

export const getShoes = () => {
    return (dispatch) => {
        fetch(shoeURL)
        .then(resp => resp.json())
        .then(shoes => dispatch({type: 'GET_SHOES', shoes}))
        .catch(errors => console.log(errors))
    }
}

export const addShoe = (shoe) => {
    return (dispatch) => {
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
        .then(shoe => dispatch({type: 'ADD_SHOE', shoe}))
        .catch(errors => console.log(errors))
    }
}

export const findShoe = (query) => {
    return (dispatch) => {
        fetch(shoeURL)
        .then(resp => resp.json())
        .then(shoe => dispatch({type: 'FIND_SHOE', query}))
        .catch(errors => console.log(errors))
    }
}

export const editShoe = (shoeData) => {
    return (dispatch) => {
        fetch(`${shoeURL}/${shoeData.id}`, {
            method: "PATCH",
            headers: {
                "Accepts": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(shoeData)
        })
        .then(resp => resp.json())
        .then(shoe => dispatch({type: "EDIT_SHOE", shoe}))
        .catch(errors => console.log(errors))
    }
}

export const deleteShoe = (shoeId) => {
    return (dispatch) => {
        fetch(shoeURL + '/' + shoeId, {
            method: 'DELETE'
        })
        .then(resp => dispatch({type: 'DELETE_SHOE', shoeId}))
        .catch(errors => console.log(errors))
    }
}

