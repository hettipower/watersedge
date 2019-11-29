import React from 'react';
import { connect } from 'react-redux';
import { Switch , Route } from 'react-router-dom';

import API from './lib/api';

import { 
  setSiteLogo , 
  setSocialMedia , 
  setFooterContact , 
  setFooterLogoUrl , 
  setAddress , 
  setFeaturedResturants 
} from './redux/common/common.actions';
import { 
  setHomeLogo , 
  setMainVideoUrl , 
  setExploreTitle , 
  setExploreContent , 
  setExploreBg , 
  setRestaurantContent , 
  setRestaurantImage , 
  setVenueContent , 
  setAllRestaurants
} from './redux/home/home.actions';
import { setVenues } from './redux/venues/venues.actions';
import { setResturants } from './redux/resturants/resturants.actions';

import HomePage from './pages/homepage/homepage.component';
import Footer from './components/footer/footer.component';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  componentDidMount(){

    const { 
      setSiteLogo , 
      setHomeLogo , 
      setMainVideoUrl , 
      setSocialMedia , 
      setFooterContact , 
      setFooterLogoUrl , 
      setAddress,
      setFeaturedResturants,
      setExploreTitle , 
      setExploreContent , 
      setExploreBg , 
      setRestaurantContent , 
      setRestaurantImage , 
      setVenueContent , 
      setVenues , 
      setAllRestaurants,
      setResturants
    } = this.props;

    //Common API
    API.get('common')
    .then(function(response){
      setSiteLogo(response.data.siteLogo);
      setSocialMedia(response.data.socialMedia);
      setFooterContact(response.data.footerContact);
      setFooterLogoUrl(response.data.footerLogoUrl);
      setAddress(response.data.address);
      setFeaturedResturants(response.data.featuredResturants);
    });

    //Home Page API
    API.get('home')
    .then(function(response){
      setHomeLogo(response.data.homeLogo);
      setMainVideoUrl(response.data.mainVideoUrl);
      setExploreTitle(response.data.exploreTitle); 
      setExploreContent(response.data.exploreContent); 
      setExploreBg(response.data.exploreBg); 
      setRestaurantContent(response.data.restaurantContent); 
      setRestaurantImage(response.data.restaurantImage); 
      setVenueContent(response.data.venueContent); 
      setAllRestaurants(response.data.allRestaurants);
    });

    //Venus API
    API.get('venues')
    .then(function(response){
      setVenues(response.data);
    });

    //Resturants API
    API.get('resturants')
    .then(function(response){
      setResturants(response.data);
    });

  }

  render(){
    return (
      <div className="appWrapper">
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Footer/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setSiteLogo : (siteLogo) => dispatch(setSiteLogo(siteLogo)) , 
  setHomeLogo : (homeLogo) => dispatch(setHomeLogo(homeLogo)) , 
  setMainVideoUrl : (mainVideoUrl) => dispatch(setMainVideoUrl(mainVideoUrl)) , 
  setSocialMedia : (socialMedia) => dispatch(setSocialMedia(socialMedia)) , 
  setFooterContact : (footerContact) => dispatch(setFooterContact(footerContact)) , 
  setFooterLogoUrl : (footerLogoUrl) => dispatch(setFooterLogoUrl(footerLogoUrl)) , 
  setAddress : (address) => dispatch(setAddress(address)) ,
  setFeaturedResturants : (featuredResturants) => dispatch(setFeaturedResturants(featuredResturants)),
  setExploreTitle : (exploreTitle) => dispatch(setExploreTitle(exploreTitle)),
  setExploreContent : (exploreContent) => dispatch(setExploreContent(exploreContent)),
  setExploreBg : (exploreBg) => dispatch(setExploreBg(exploreBg)),
  setRestaurantContent : (restaurantContent) => dispatch(setRestaurantContent(restaurantContent)),
  setRestaurantImage : (restaurantImage) => dispatch(setRestaurantImage(restaurantImage)),
  setVenueContent : (venueContent) => dispatch(setVenueContent(venueContent)),
  setVenues : (venues) => dispatch(setVenues(venues)),
  setAllRestaurants : (allRestaurants) => dispatch(setAllRestaurants(allRestaurants)),
  setResturants : (resturants) => dispatch(setResturants(resturants)),
})

export default connect(null , mapDispatchToProps)(App);