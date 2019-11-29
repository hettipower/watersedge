import { homeActionTypes } from './home.types';

const INITIAL_STATE = {
    homeLogo : null,
    mainVideoUrl : null,
    exploreTitle : null,
    exploreContent : null,
    exploreBg : null,
    restaurantContent : null,
    restaurantImage : null,
    venueContent : null,
    allRestaurants : null,
}

const homeReducer = ( state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case homeActionTypes.SET_HOME_LOGO:
            return{
                ...state,
                homeLogo : action.payload
            }
        case homeActionTypes.SET_MAIN_VIDEO_URL:
            return{
                ...state,
                mainVideoUrl : action.payload
            }
        case homeActionTypes.SET_EXPLORE_TITLE:
            return{
                ...state,
                exploreTitle : action.payload
            }
        case homeActionTypes.SET_EXPLORE_CONTENT:
            return{
                ...state,
                exploreContent : action.payload
            }
        case homeActionTypes.SET_EXPLORE_BACKGROUND:
            return{
                ...state,
                exploreBg : action.payload
            }
        case homeActionTypes.SET_RESTURANT_CONTENT:
            return{
                ...state,
                restaurantContent : action.payload
            }
        case homeActionTypes.SET_RESTURANT_IMAGE:
            return{
                ...state,
                restaurantImage : action.payload
            }
        case homeActionTypes.SET_VENUE_CONTENT:
            return{
                ...state,
                venueContent : action.payload
            }
        case homeActionTypes.SET_ALL_RESTURANT:
            return{
                ...state,
                allRestaurants : action.payload
            }
        default:
            return state;
    }
}

export default homeReducer;