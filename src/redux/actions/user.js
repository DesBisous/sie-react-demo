import * as actionTypes from '../constants/user'

export const update = (data) => ({
    type: actionTypes.USER_UPDATE,
    data
});