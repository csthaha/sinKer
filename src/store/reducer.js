const defaultState = {
    show: true
}

const reducer = (state = defaultState, action) => {
    if (action.type === 'CHANGE_CHOOSE_SHOW') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.show = false
        return newState
    }
    if( action.type === 'CHANGE_CHOOSE_HIDDEN') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.show = true
        return newState
    }
    return state
}

export default reducer