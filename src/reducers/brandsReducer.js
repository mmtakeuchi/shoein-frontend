const brandsReducer = (state = {brands: []}, action) => {
    switch(action.type) {
        case 'GET_BRANDS':
            return {
                ...state, 
                brands: state.brands
            }
            
        default: 
            return state
    }
}

export default brandsReducer;