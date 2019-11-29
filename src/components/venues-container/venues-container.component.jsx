import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import { selectVenues } from '../../redux/venues/venues.selectors';
import { selectVenueContent } from '../../redux/home/home.selectors';

import VenueItem from '../venue-item/venue-item.component';

import './venues-container.styles.scss';

const VenuesContainer = ({ venues , venueContent}) => (
    <div className="venusContainer">
        {
            (venues)?
            venues.map( venue => <VenueItem key={venue.ID} imageUrl={venue.mainBanner} title={venue.title} type="VENUES" /> )
            : ''
        }
        <div className="venueItem venueContent">
            <h2>OUR VENUES</h2>
            <div className="our_venue_cont" dangerouslySetInnerHTML={{__html: venueContent }} />
            <Link className="btn" to="/venues">View All</Link>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    venues : selectVenues,
    venueContent : selectVenueContent
});

export default connect(mapStateToProps)(VenuesContainer);