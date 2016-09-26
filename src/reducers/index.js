import { combineReducers } from 'redux'
import calcReducer from './calcReducer'
import tabReducer from './tabReducer'
import validateReducer from './validateReducer'

const calcApp = combineReducers({
    calcReducer,
    tabReducer,
    validateReducer,
})

export default calcApp