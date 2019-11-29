import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import { selectFeaturedResturants } from '../../redux/common/common.selectors';

import './featured-resturants.styles.scss';

const FeaturedResturants = ({ featuredResturants }) => (
    <ul className="featured_restaurants">
        {
            (featuredResturants)?
            featuredResturants.map( resturant => 
                <li key={resturant.logoUrl}>
                    <Link to={resturant.pageURL.replace('http://www.watersedge.lk' , '')}>
                        <img src={resturant.logoUrl} alt={resturant.logoAlt}/>
                    </Link>
                </li> 
            )
            : ''
        }
    </ul>
);

const mapStateToProps = createStructuredSelector({
    featuredResturants : selectFeaturedResturants
});

export default connect(mapStateToProps)(FeaturedResturants);