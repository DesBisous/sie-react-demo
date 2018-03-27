import * as actionTypes from '../constants/user'

export function update(data) {
    return {
        type: actionTypes.USER_UPDATE,
        data
    }
}