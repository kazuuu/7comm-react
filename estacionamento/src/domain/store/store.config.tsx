    import { createStore, combineReducers } from 'redux';
import RootReducer from './root/root.reducer';

const StoreConfig = createStore(RootReducer);

// export type RootStore = ReturnType<typeof RootReducer>

export default StoreConfig;