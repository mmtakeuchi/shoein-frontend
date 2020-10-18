const shoesReducer = (state = {shoes: []}, action) => {
    switch(action.type) {
        case 'GET_SHOES':
            return {
                ...state,
                shoes: action.shoes
            }

        case 'FIND_SHOE':
            let findSearch = state.shoes.filter(shoe => shoe.name.toLowerCase().includes(action.query.query.toLowerCase()))
            return findSearch
            
        case 'ADD_SHOE':
            return {
                ...state,
                shoes: [...state.shoes, action.shoe]
            }

        case 'DELETE_SHOE':
            let filteredShoes = state.shoes.filter(shoe => shoe.id !== action.shoeId)
            
            return {
                ...state,
                shoes: [...filteredShoes]
            }

        case 'EDIT_SHOE':
            let otherShoes = state.shoes.filter(shoe => shoe.id !== action.shoe.id)

            return {
                ...state,
                shoes: [...otherShoes, action.shoe]
            }

        default: 
            return state
    }
}

export default shoesReducer;