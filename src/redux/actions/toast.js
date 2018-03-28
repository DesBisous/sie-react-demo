import * as actionTypes from '../constants/toast'

export const show = (content) => ({
    type: actionTypes.TOAST_SHOW,
    data: content
});

export const hide = (data) => ({
    type: actionTypes.TOAST_HIDE,
    data
});

export const _error = (err) => ({
    type: actionTypes.TOAST_ERROR,
    err
});