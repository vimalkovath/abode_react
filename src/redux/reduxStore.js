import { createStore } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import logger from 'redux-logger'
// import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

const reduxStore = createStore(
  rootReducer
)
// const store = createStore(rootReducer);
// console.log("innitial state",reduxStore.getState());

export default reduxStore

