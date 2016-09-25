const initialState = {
    currentTab: 1,
}

const tabReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TAB_ACTION':
            return Object.assign({}, state, {currentTab: action.key})
        default:
            return state
    }
}

export default tabReducer