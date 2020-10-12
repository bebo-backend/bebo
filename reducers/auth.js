import * as types from '../types'

// COUNTER REDUCER

const initialUserData= {
    username:'Anonymous'

}
const authReducer = (state = initialUserData, { type }) => {
  switch (type) {
    case types.SET_AUTH:
      return {
          
      }

    default:
      return state
  }
}


export default authReducer