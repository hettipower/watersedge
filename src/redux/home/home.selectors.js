import { createSelector } from 'reselect';

const selectHomeAPI = state => state.home;


export const selectHomeLogo = createSelector(
    [selectHomeAPI],
    (home) => home.homeLogo
);

export const selectMainVideoUrl = createSelector(
    [selectHomeAPI],
    (home) => home.mainVideoUrl
);

export const selectExploreTitle = createSelector(
    [selectHomeAPI],
    (home) => home.exploreTitle
);

export const selectExploreContent = createSelector(
    [selectHomeAPI],
    (home) => home.exploreContent
);

export const selectExploreBg = createSelector(
    [selectHomeAPI],
    (home) => home.exploreBg
);

export const selectRestaurantContent = createSelector(
    [selectHomeAPI],
    (home) => home.restaurantContent
);

export const selectRestaurantImage = createSelector(
    [selectHomeAPI],
    (home) => home.restaurantImage
);

export const selectVenueContent = createSelector(
    [selectHomeAPI],
    (home) => home.venueContent
);

export const selectAllRestaurants = createSelector(
    [selectHomeAPI],
    (home) => home.allRestaurants
);

export const selectClickedRestuant = createSelector(
    [selectHomeAPI],
    (home) => home.clickedRestuant
);