import { combineReducers } from 'redux'
import userReducer from './post/postReducer'

const rootReducer = combineReducers({
  user: userReducer
})

export default rootReducer
