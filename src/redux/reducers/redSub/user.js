import * as actionTypes from '../../constants/user'

const initialState = {};

export default function user ( state = initialState, action) {
    switch (action.type) {
        case actionTypes.USER_UPDATE:
            return action.data;
        default:
            return state;
    }
}