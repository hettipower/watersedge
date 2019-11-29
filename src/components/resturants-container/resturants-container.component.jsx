import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectRestaurantContent , selectRestaurantImage , selectAllRestaurants } from '../../redux/home/home.selectors';

import SingleResturantContent from '../single-resturant-content/single-resturant-content.component';

import './resturants-container.styles.scss';

const ResturantsContainer = ({ restaurantContent , restaurantImage , allRestaurants }) => {

    const handleResturant = (resturantID) => {
        console.log(resturantID);
    }
    
    return(
        <div className="resturantContainerWrap">
            <div className="all_resturent_wrap d-flex flex-wrap">
                <div className="resturent_cont">
                    <h2>Our <br/>Restaurants</h2>
                    <div dangerouslySetInnerHTML={{__html: restaurantContent }} />
                </div>
                <div className="all_resturents_wrap">
                    <span className="imgOverlay" style={{ backgroundImage : `url(${restaurantImage})` }}></span>
                    <div className="all_resturents">
                        {
                            (allRestaurants)?
                            allRestaurants.map( resturant => <div key={resturant.title} className="resturant" onClick={ () => handleResturant(resturant.post)}>
                                <img src={resturant.image} alt={resturant.title}/>
                                <h3>{resturant.title}</h3>
                            </div> )
                            : ''
                        }
                    </div>
                </div>
            </div>
            <SingleResturantContent/>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    restaurantContent : selectRestaurantContent,
    restaurantImage : selectRestaurantImage , 
    allRestaurants : selectAllRestaurants,
});

export default connect(mapStateToProps)(ResturantsContainer);