import { homeActionTypes } from './home.types';

export const setHomeLogo = homeLogo => ({
    type : homeActionTypes.SET_HOME_LOGO,
    payload : homeLogo
});

export const setMainVideoUrl = mainVideoUrl => ({
    type : homeActionTypes.SET_MAIN_VIDEO_URL,
    payload : mainVideoUrl
});

export const setExploreTitle = exploreTitle => ({
    type : homeActionTypes.SET_EXPLORE_TITLE,
    payload : exploreTitle
});

export const setExploreContent = exploreContent => ({
    type : homeActionTypes.SET_EXPLORE_CONTENT,
    payload : exploreContent
});

export const setExploreBg = exploreBg => ({
    type : homeActionTypes.SET_EXPLORE_BACKGROUND,
    payload : exploreBg
});

export const setRestaurantContent = restaurantContent => ({
    type : homeActionTypes.SET_RESTURANT_CONTENT,
    payload : restaurantContent
});

export const setRestaurantImage = restaurantImage => ({
    type : homeActionTypes.SET_RESTURANT_IMAGE,
    payload : restaurantImage
});

export const setVenueContent = venueContent => ({
    type : homeActionTypes.SET_VENUE_CONTENT,
    payload : venueContent
});

export const setAllRestaurants = allRestaurants => ({
    type : homeActionTypes.SET_ALL_RESTURANT,
    payload : allRestaurants
});