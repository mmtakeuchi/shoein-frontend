const initialState = {
    brands: [],
    shoes: [{
       name: "",
       image: "",
       color: "" 
    }]
}

const brandsReducer = (state = {brands: []}, action) => {
    switch(action.type) {
        case 'GET_BRANDS':
            return {
                ...state, 
                brands: action.brands}

        default: 
            return state
    }
}

export default brandsReducer;