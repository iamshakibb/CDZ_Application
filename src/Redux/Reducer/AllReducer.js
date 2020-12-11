import { combineReducers } from 'redux'
import FormModalReducer from './FormModalReducer/FormModalReducer'

// combine all the reducer
const allReducer = combineReducers({
  FormModal: FormModalReducer,
})

export default allReducer
