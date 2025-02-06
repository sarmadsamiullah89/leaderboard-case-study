import { combineReducers, legacy_createStore as createStore } from 'redux';

import userReducer from './userReducer';

const rootReducer = combineReducers({
    userReducer: userReducer
})

const store = createStore(rootReducer);

export default store;
export type RootState = ReturnType<typeof store.getState>;