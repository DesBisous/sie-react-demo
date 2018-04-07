import * as actionTypes from '../../constants/loc'

const initialState = {
    city: '深圳'
};

export default function loc ( state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOC_UPDATE:
            return action.data;
        default:
            return state;
    }
}