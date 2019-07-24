import uuid from 'uuid'
import { SET_ALERT, REMOVE_ALERT } from './types'

export const setAlert = (msg, alertType, timeOut = 5000) => dispatch => {
  const id = uuid.v4()
  // call the setAlert from our reducer
  dispatch({
    type: SET_ALERT,
    payload: {msg, alertType, id}
  })
  // remove the alert after 5000s
  setTimeout(() => dispatch({type: REMOVE_ALERT, payload: id}), timeOut)

}