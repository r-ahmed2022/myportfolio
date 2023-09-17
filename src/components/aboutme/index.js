// reducers/index.js
import { combineReducers } from 'redux';
import githubReducer from './redux/githubSlice';

const rootReducer = combineReducers({
    githubData: githubReducer,
});

export default rootReducer;
