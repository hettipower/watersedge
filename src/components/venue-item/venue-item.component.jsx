import React from 'react';

import Capacity from '../../assets/images/capacity-white.png';
import Height from '../../assets/images/height-white.png';

import './venue-item.styles.scss';

const VenueItem = ({ imageUrl , title , type , metaVal , capacity , area , height }) => (
    <div className="venueItem">
        <span className="imgOverlay" style={{ backgroundImage : `url(${imageUrl})` }}></span>
        <div className="venue_title_wrap">
            <h3>{type}</h3>
            <h2>{title}</h2>
            {
                (metaVal)?
                <ul className="venue_details_wrap d-flex justify-content-between">
                    {
                        (capacity)?
                        <li>
                            <img src={Capacity} alt="max occupancy" />
                            max occupancy<br/>
                            <span>{capacity}</span>
                        </li>
                        : ''
                    }

                    {
                        (area)?
                        <li>
                            <i className="fas fa-arrows-alt"></i>
                            venue area<br/>
                            <span>{area}</span>
                        </li>
                        : ''
                    }
                    
                    {
                        (height)?
                        <li>
                            <img src={Height} alt="height" />
                            height<br/>
                            <span>{height}</span>
                        </li>
                        : ''
                    }
                    
                </ul>
                : ''
            }            
        </div>
    </div>
);

export default VenueItem;