import * as types from '../actions/ActionTypes'


export default (state = {}, action) => {
  switch (action.type) {
    case types.GOTO_TAB:
      return {...state, activeTab: action.data}
    case types.COUNT:
      return { ...state, count: (state.count || 0) + 1 };

    default:
      return state;
  }
}
