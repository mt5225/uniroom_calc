import { combineReducers } from 'redux'
import calcReducer from './calcReducer'
import tabReducer from './tabReducer'

const calcApp = combineReducers({
    calcReducer,
    tabReducer,
})

export default calcApp