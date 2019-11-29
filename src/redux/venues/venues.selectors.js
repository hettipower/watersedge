import { createSelector } from 'reselect';

const selectVenuesAPI = state => state.venue;

export const selectVenues = createSelector(
    [selectVenuesAPI],
    (venue) => venue.venues
);