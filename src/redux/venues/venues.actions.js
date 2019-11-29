import { venueActionTypes } from './venues.types';

export const setVenues = venues => ({
    type : venueActionTypes.SET_VENUES,
    payload : venues
});