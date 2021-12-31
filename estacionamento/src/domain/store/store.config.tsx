import { createStore, combineReducers } from 'redux';
import authReducer from "./auth/auth.reducer";
import { configureStore } from '@reduxjs/toolkit'

const reducers = combineReducers({
    authReducer: authReducer,
    nomes: function(state, action) {
        return [
            'A',
            'B',
            'C'               
        ]
    },
});

export default function storeConfig() {
    return createStore(reducers);
}

// import { configureStore } from '@reduxjs/toolkit'
// import authReducer from './auth/auth.reducer'
// // ...

// const storeConfig = configureStore({
//   reducer: {
//     authReducer: authReducer,
//   }
// })

// export default storeConfig;

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof storeConfig.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof storeConfig.dispatch

