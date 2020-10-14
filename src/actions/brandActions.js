const baseURL = "http://localhost:3001/brands"

export const getBrands = () => {
    return (dispatch) => {
        fetch(baseURL)
        .then(resp => resp.json())
        .then(brands => dispatch({type: 'GET_BRANDS', brands}))
    }
}