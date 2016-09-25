const initialState = {
    mealState: 'warning',
    miscState: 'warning',
}

const tabReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MEAL_CHANGE':
            return state
        case 'MISC_CHANGE':
            return state
        default:
            return state
    }
}

export default tabReducer