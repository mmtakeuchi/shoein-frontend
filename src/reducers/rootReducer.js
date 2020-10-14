import brandsReducer from './brandsReducer'
import shoesReducer from './shoesReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers ({
    brands: brandsReducer,
    shoes: shoesReducer
})

export default rootReducer;