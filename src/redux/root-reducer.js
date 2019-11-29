import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import commonReducer from './common/common.reducer';
import homeReducer from './home/home.reducer';
import venueReducer from './venues/venues.reducer';
import resturantReducer from './resturants/resturants.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist : ['']
}

const rootReducer = combineReducers({
    common : commonReducer,
    home : homeReducer,
    venue : venueReducer,
    resturant : resturantReducer
});

export default persistReducer(persistConfig, rootReducer);