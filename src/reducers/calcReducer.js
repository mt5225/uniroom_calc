import calcService from '../services/calcService'

const initialState = {
    questionAnswered: 0,
    questionTotal: 10,
    totalPrice: 0,
    answers: {
        productMode: '',
        hospitalClass: '',
        doctorClass: '',
        houseClass: '',
        careMode: '',
    }
}

const updateSummary = (state) => {
    //scan answers
    let total = 0
    for (var item in state.answers) {
        if (state.answers.hasOwnProperty(item)) {
            if (state.answers[item].length > 1) total++;
        }
    }
    return Object.assign(
        {},
        state,
        { questionAnswered: total },
        { totalPrice: calcService(state.answers) }
    )
}

const calcReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Q_DOCTOR':
            state.answers[action.payload.name] = action.payload.value
            return updateSummary(state)

        case 'Q_HOUSE':
            state.answers['houseClass'] = action.payload.value
            return updateSummary(state)

        case 'Q_CARE':
            state.answers['careMode'] = action.payload.value
            return updateSummary(state)

        default:
            return state
    }
}

export default calcReducer