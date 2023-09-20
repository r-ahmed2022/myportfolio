// reducers/index.js
import { combineReducers } from 'redux';
import githubReducer from './redux/githubSlice';
import starCountReducer from './redux/starCountSlice';

const rootReducer = combineReducers({
  githubData: githubReducer,
  starCountData: starCountReducer,
});

export default rootReducer;
