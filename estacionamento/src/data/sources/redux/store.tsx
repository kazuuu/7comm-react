// in store.ts
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import AuthReducer from './auth/auth.reducer'
import UiReducer from './ui/ui.reducer'
// import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const middleware = [thunk];
//this is for redux devtool purpose

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
    }
}

const reducer = combineReducers({
    auth: AuthReducer,//user key ma store gareko
    UI: UiReducer
});

export type RootState = ReturnType<typeof reducer>


const store = createStore(
    reducer, initialState, 
    // composeWithDevTools(applyMiddleware(...middleware)),
    compose(
        applyMiddleware(...middleware)
        // ,
        // (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) as any
    )
);

export default store;