import * as actions from '../constants/actionTypes'


export const initialState = {
    term:null,
}

const reducer = (state, action) => {
switch (action.type) {
    case actions.SET_SEARCH_TERM:
        return {
            ...state, term:action.term
        }  
    default:
        return state
}
}
export default reducer