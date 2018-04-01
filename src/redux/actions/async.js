import * as actionTypes from '../constants/async'
import get from '../../api/get';
import * as toast from './toast'

export const getWelfare = () => {
    return ( dispatch, getState ) => {
        // 开启loading
        dispatch(toast.show('loading...'));
        let page =  Math.floor( Math.random() * 10 + 1 );
        get( '/福利/10/' + page )
            .then(res => {
                dispatch({
                    type: actionTypes.ASYNC_WELFARE_SUCCESS,
                    data: res.data.results
                });
                // 关闭loading
                setTimeout(
                    ()=> dispatch(toast.hide({ success: true, content: 'success' })),
                    700
                )
            })
            .catch(err => {
                dispatch({
                    type: actionTypes.ASYNC_WELFARE_ERROR
                });
                // 错误
                setTimeout(
                    () => dispatch(toast._error({ status: true, msg: JSON.stringify(err) })),
                    500
                )
            })
    }
};