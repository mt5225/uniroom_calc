export const tabAction = (key) => {
    return {
        type: 'TAB_ACTION',
        key
    }
}

export const doctorAction = (payload) => {
    return {
        type: 'Q_DOCTOR',
        payload
    }
}

export const houseAction = (payload) => {
    return {
        type: 'Q_HOUSE',
        payload
    }
}

export const careAction = (payload) => {
    return {
        type: 'Q_CARE',
        payload
    }
}

export const mealAction = (payload) => {
    return {
        type: 'Q_MEAL',
        payload
    }
}

