import React from 'react';

import HeaderHome from '../../components/header-home/header-home.component';
import MainVideo from '../../components/main-video/main-video.component';
import ExploreContent from '../../components/explore-content/explore-content.component';
import VenuesContainer from '../../components/venues-container/venues-container.component';
import ResturantsContainer from '../../components/resturants-container/resturants-container.component';

import './homepage.styles.scss';

const HomePage = () => (
    <div className="homePageWrap">
        <HeaderHome/>
        <MainVideo/>
        <ExploreContent/>
        <VenuesContainer />
        <ResturantsContainer />
    </div>
);

export default HomePage;