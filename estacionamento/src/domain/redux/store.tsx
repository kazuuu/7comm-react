// in store.ts
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import UserReducer from './auth/user.reducer'
import UiReducer from './ui/ui.reducer'

const initialState = {};

const middleware = [thunk];
//this is for redux devtool purpose

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
    }
}

const reducer = combineReducers({
    user: UserReducer,//user key ma store gareko
    UI: UiReducer
});

const store = createStore(
    reducer, initialState, 
    compose(
        applyMiddleware(...middleware)
        // ,
        // (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) as any
    )
);

export default store;