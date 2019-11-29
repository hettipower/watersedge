import { createSelector } from 'reselect';

const selectResturantsAPI = state => state.resturants;

export const selectResturants = createSelector(
    [selectResturantsAPI],
    (resturant) => resturant.resturants
);

export const selectResturant = resturantID => createSelector(
    [selectResturantsAPI],
    (resturant) => resturant.resturants.filter( resturant => resturant.ID === resturantID )
);