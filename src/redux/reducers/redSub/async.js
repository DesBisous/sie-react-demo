import * as actionTypes from '../../constants/async'

const initialState = {
    list: [],
    local: []
};
export default function async ( state = initialState, action) {
    switch (action.type) {
        case actionTypes.ASYNC_WELFARE_SUCCESS:
            return { ...state, list: action.data };
        case actionTypes.ASYNC_WELFARE_ERROR:
            return state;
        case actionTypes.ASYNC_LOCAL_SUCCESS:
            return { ...state, local: state.local.concat(action.data) };
        case actionTypes.ASYNC_LOCAL_ERROR:
            return state;
        default:
            return state;
    }
}