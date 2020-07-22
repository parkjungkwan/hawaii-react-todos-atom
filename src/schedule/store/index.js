import {createStore} from 'redux'
import scheduleReducer from "./scheudule.reducer";

const store = createStore(
    scheduleReducer
)
export default store
