const catigory =require('./Categories')
const product =require('./products')
import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
let reducers=combineReducers({reducers:catigory , reducers:product})

let store =()=>{
  return createStore(reducers , composeWithDevTools())
};
export default store();