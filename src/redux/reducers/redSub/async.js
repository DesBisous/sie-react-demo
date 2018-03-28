import * as actionTypes from '../../constants/async'

const initialState = {
    list: []
};
export default function async ( state = initialState, action) {
    switch (action.type) {
        case actionTypes.ASYNC_WELFARE_SUCCESS:
            return { ...state, list: state.list.concat(action.data) };
        case actionTypes.ASYNC_WELFARE_ERROR:
            return state;
        default:
            return state;
    }
}