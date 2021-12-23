    import { createStore, combineReducers } from 'redux';
    import numerosReducer from "domain/store/reducers/numeros.reducer";
    
    const reducers = combineReducers({
        numeros: numerosReducer,
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