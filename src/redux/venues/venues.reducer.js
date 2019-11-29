import { venueActionTypes } from './venues.types';

const INITIAL_STATE = {
    venues : null,
}

const venueReducer = ( state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case venueActionTypes.SET_VENUES:
            return{
                ...state,
                venues : action.payload
            }
        default:
            return state;
    }
}

export default venueReducer;