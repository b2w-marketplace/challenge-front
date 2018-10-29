import {combineReducers} from 'redux'
import profile from './searchReducer'
import image from './imageReducer'


export default combineReducers({
  profile,
  image
})
