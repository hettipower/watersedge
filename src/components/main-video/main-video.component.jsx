import React from 'react';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectMainVideoUrl , selectHomeLogo } from '../../redux/home/home.selectors';

import './main-video.styles.scss';

const MainVideo = ({ mainVideoUrl , homeLogo }) => (
    <div className="mainVideoWrap">
        <span className="overlay"></span>
        <div className="homeLogoWrap">
            {
                (homeLogo)?
                <img src={homeLogo} alt="Watersedge"/>
                : ''
            }
        </div>
        {
            (mainVideoUrl)?
            <ReactPlayer 
                url={mainVideoUrl}
                playing={true}
                loop={true}
                controls={false}
                playsinline
                volume={0}
                muted
                width="100%"
                height="56vw"
            />
            : ''
        }        
    </div>
);

const mapStateToProps = createStructuredSelector({
    mainVideoUrl : selectMainVideoUrl,
    homeLogo : selectHomeLogo
})

export default connect(mapStateToProps)(MainVideo);