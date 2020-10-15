const shoesReducer = (state = {shoes: []}, action) => {
    switch(action.type) {
        case 'GET_SHOES':
            return {
                ...state,
                shoes: action.shoes
            }
            
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

        default: 
            return state
    }
}

export default shoesReducer;