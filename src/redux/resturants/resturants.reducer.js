import { resturantActionTypes } from './resturants.types';

const INITIAL_STATE = {
    resturants : null,
}

const resturantReducer = ( state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case resturantActionTypes.SET_RESTURANTS:
            return{
                ...state,
                resturants : action.payload
            }
        default:
            return state;
    }
}

export default resturantReducer;