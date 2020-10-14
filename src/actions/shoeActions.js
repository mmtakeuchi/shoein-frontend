const baseURL = "http://localhost:3001/shoes"

export const getShoes = () => {
    return (dispatch) => {
        fetch(baseURL)
        .then(resp => resp.json())
        .then(shoes => dispatch({type: 'GET_SHOES', shoes}))
    }
}

