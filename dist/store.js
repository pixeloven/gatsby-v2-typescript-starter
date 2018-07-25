'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const redux_1 = require('redux');
const redux_devtools_extension_1 = require('redux-devtools-extension');
// Actions
exports.TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
exports.toggleSidebar = function () {
  return ({type: exports.TOGGLE_SIDEBAR});
};
// Reducer
exports.reducer = function (state, action) {
  switch (action.type) {
    case exports.TOGGLE_SIDEBAR:
      return Object.assign({}, state, {isSidebarVisible: !state.isSidebarVisible});
    default:
      return state;
  }
};
// Store
exports.initialState = {isSidebarVisible: false};
exports.store = redux_1.createStore(exports.reducer, exports.initialState, redux_devtools_extension_1.devToolsEnhancer({}));
// # sourceMappingURL=store.js.map
