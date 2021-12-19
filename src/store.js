
import { createStore } from 'redux'
import {reducer} from './redux/redux'

const store = createStore(reducer);

export default store