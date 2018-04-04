import * as actionTypes from '../../constants/toast'
import { Toast } from 'antd-mobile';

const initialState = {
    isLoading: false,
    err: {
        status: false,
        msg: ''
    }
};

export default function toast ( state = initialState, action) {
    switch (action.type) {
        case actionTypes.TOAST_SHOW:
            // 加载中 ...
            Toast.loading(action.data, 0, () => {
                console.log(action.data);
            });
            return Object.assign(state, { isLoading: true });
        case actionTypes.TOAST_HIDE:
            // 加载完毕
            if( action.data.success ) {
                Toast.success(action.data.content, 1);
            }else {
                Toast.hide();
            }
            return state;
        case actionTypes.TOAST_ERROR:
            // 加载错误
            Toast.fail(action.err.msg, 3 );
            return Object.assign(state, { err: action.err } );
        default:
            return state;
    }
}