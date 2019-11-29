import { resturantActionTypes } from './resturants.types';

export const setResturants = resturants => ({
    type : resturantActionTypes.SET_RESTURANTS,
    payload : resturants
});