import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import { selectRestaurantContent , selectRestaurantImage , selectAllRestaurants , selectClickedRestuant } from '../../redux/home/home.selectors';
import { setClickedRestuant } from '../../redux/home/home.actions';

import SingleResturantContent from '../single-resturant-content/single-resturant-content.component';

import './resturants-container.styles.scss';

const ResturantsContainer = ({ restaurantContent , restaurantImage , allRestaurants , setClickedRestuant , clickedRestuant }) => {
    
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
                            allRestaurants.map( resturant => {
                                return (!resturant.customLink)?
                                <div key={resturant.title} className="resturant" onClick={ () => setClickedRestuant(resturant.post)}>
                                    <img src={resturant.imageUrl} alt={resturant.title}/>
                                    <h3>{resturant.title}</h3>
                                </div>
                                : <div key={resturant.title} className="resturant">
                                    <Link to={resturant.customLink.replace('https://www.watersedge.lk' , '')} />
                                    <img src={resturant.imageUrl} alt={resturant.title}/>
                                    <h3>{resturant.title}</h3>
                                </div>
                            })
                            : ''
                        }
                    </div>
                </div>
            </div>
            <SingleResturantContent open={(clickedRestuant) ? 'openResturantContent' : ''} />
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    restaurantContent : selectRestaurantContent,
    restaurantImage : selectRestaurantImage , 
    allRestaurants : selectAllRestaurants,
    clickedRestuant : selectClickedRestuant
});

const mapDispatchToProps = dispatch => ({
    setClickedRestuant : (clickedRestuant) => dispatch(setClickedRestuant(clickedRestuant))
});

export default connect(mapStateToProps , mapDispatchToProps)(ResturantsContainer);