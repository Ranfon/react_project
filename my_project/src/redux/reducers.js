import { combineReducers } from "redux";

/**
 * 用来根据prevState和action生成新状态函数模块
 *
 */
function aaa(prevState = 111, action) {
  switch (action.type) {
    default:
      return prevState;
  }
}

function bbb(prevState = 111, action) {
  switch (action.type) {
    default:
      return prevState;
  }
}

export default combineReducers({
  aaa,
  bbb
});
