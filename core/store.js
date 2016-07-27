/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import rootReducers from './reducers'

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
  duration: true
})

const finalStoreCreator = applyMiddleware(
	loggerMiddleware,
)(createStore)

let storeCreator = initialState => {
	return finalStoreCreator(rootReducers, initialState)
}

let store = storeCreator({
  activeTab: 'Home',
  count: 0
});

export default store;

// Centralized application state
// For more information visit http://redux.js.org/
// const store = createStore((state, action) => {
//   // TODO: Add action handlers (aka "reduces")
//   switch (action) {
//     case 'COUNT':
//       return { ...state, count: (state.count || 0) + 1 };
//     default:
//       return state;
//   }
// });
//
// export default store;
