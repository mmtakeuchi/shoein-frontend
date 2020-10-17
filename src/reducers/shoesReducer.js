const shoesReducer = (state = {shoes: []}, action) => {
    switch(action.type) {
        case 'GET_SHOES':
            return {
                ...state,
                shoes: action.shoes
            }

        case 'FIND_SHOE':
            console.log(action.query)
            console.log(state.shoes)
            // const wineFilter = Wine.all.filter(wine => {
            //     return wine.label.toLowerCase().includes(searchValue.toLowerCase())
            // })
            // debugger;
            let findSearch = state.shoes.filter(shoe => shoe.name.toLowerCase().includes(action.query.query.toLowerCase()))
            console.log(findSearch)
            
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