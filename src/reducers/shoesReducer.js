const shoesReducer = (state = {shoes: []}, action) => {
    switch(action.type) {
        case 'GET_SHOES':
            return {
                ...state,
                shoes: action.shoes
            }
            
        case 'ADD_SHOE':
            // const newShoe = {id: action.post.id, title: action.post.title, content: action.post.content}
            console.log("this is the:", action.shoe)
            return {
                ...state,
                shoes: [...state, action.shoe]
            }

        default: 
            return state
    }
}

export default shoesReducer;