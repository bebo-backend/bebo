
import * as types from '../types'


export const setAccountDispatch = () => (dispatch) =>
  dispatch({
    type: types.SET_AUTH,
    payload: {  },
  })


  export const setAccount = () => (dispatch) => dispatch(setAccountDispatch)
