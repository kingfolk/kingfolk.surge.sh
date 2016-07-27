import * as types from './ActionTypes'

export function gotoTab(data) {
  return {
    type: types.GOTO_TAB,
    data
  }
}

export function incCount() {
  return {
    type: types.INC_COUNT
  }
}
