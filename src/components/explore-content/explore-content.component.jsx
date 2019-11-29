import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectExploreTitle , selectExploreContent , selectExploreBg } from '../../redux/home/home.selectors';

import './explore-content.styles.scss';

const ExploreContent = ({ exploreTitle , exploreContent , exploreBg }) => (
    <div className="exploreContentWrap d-flex justify-content-between">
        <span className="imgOverlay" style={{ backgroundImage : `url(${exploreBg})` }}></span>
        <div className="explore_title_wrap">
            <h2 dangerouslySetInnerHTML={{__html: exploreTitle }} />
        </div>
        <div className="explore_cont_wrap" dangerouslySetInnerHTML={{__html: exploreContent }} />
    </div>
);

const mapStateToProps = createStructuredSelector({
    exploreTitle : selectExploreTitle,
    exploreContent : selectExploreContent,
    exploreBg : selectExploreBg,
});

export default connect(mapStateToProps)(ExploreContent);