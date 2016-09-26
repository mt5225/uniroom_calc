const initialState = {
    mealState: {
        NumberOfPeople: 'warning',
        NumberOfDays: 'warning',
    },
    miscState: {
        Traffic: "warning",
        Misc: "warning",
    },
}

const validateReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'V_MEAL_PEOPLE':
            if (/^\d+$/.test(action.payload)) {
                const tmp = Object.assign({}, state.mealState, { NumberOfPeople: 'success' })
                return Object.assign({}, state, { mealState: tmp })
            } else {
                return state
            }
        case 'V_MEAL_DAYS':
            if (/^\d+$/.test(action.payload)) {
                const tmp = Object.assign({}, state.mealState, { NumberOfDays: 'success' })
                return Object.assign({}, state, { mealState: tmp })
            } else {
                return state
            }
        case 'V_OTHER_TRAFFIC':
            if (/^\d+$/.test(action.payload)) {
                const tmp = Object.assign({}, state.miscState, { Traffic: 'success' })
                return Object.assign({}, state, { miscState: tmp })
            } else {
                return state
            }
        case 'V_OTHER_MISC':
            if (/^\d+$/.test(action.payload)) {
                const tmp = Object.assign({}, state.miscState, { Misc: 'success' })
                return Object.assign({}, state, { miscState: tmp })
            } else {
                return state
            }
        default:
            return state
    }
}

export default validateReducer