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

export const mealValidatePeople = (payload) => {
    return {
        type: 'V_MEAL_PEOPLE',
        payload
    }
}

export const mealValidateDays = (payload) => {
    return {
        type: 'V_MEAL_DAYS',
        payload
    }
}

export const otherValidateTraffic = (payload) => {
    return {
        type: 'V_OTHER_TRAFFIC',
        payload
    }
}

export const otherValidateMisc = (payload) => {
    return {
        type: 'V_OTHER_MISC',
        payload
    }
}