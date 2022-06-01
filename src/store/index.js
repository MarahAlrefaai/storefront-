import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import catigory from './Categories'
import product from './products'
import cart from './Cart'
let reducers=combineReducers({catigory , product})

let store =()=>{
  return createStore(reducers , composeWithDevTools())
};
export default store();