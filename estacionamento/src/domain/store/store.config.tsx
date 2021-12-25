    import { createStore, combineReducers } from 'redux';
    import authReducer from "./auth/auth.reducer";
    
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