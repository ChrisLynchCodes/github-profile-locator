

export const alertReducer = (state, action) => {

    switch (action.type) {
        case 'SET_ALERT':
            return action.payLoad
            
        case 'REMOVE_ALERT':
            return null
            default:
                return state
    }

}