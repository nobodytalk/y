import { combineReducers, createStore } from 'redux';
import GlobalReducer from './global';

const reducers = combineReducers({
    global: GlobalReducer,
});
const store = createStore(reducers);

export default store;