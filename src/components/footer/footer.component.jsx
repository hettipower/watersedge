import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectFooterLogoUrl , selectSocialMedia , selectAddress } from '../../redux/common/common.selectors';

import FooterMenu from '../footer-menu/footer-menu.component';
import FeaturedResturants from '../featured-resturants/featured-resturants.component';
import FooterContact from '../footer-contact/footer-contact.component';

import CreatorLogo from '../../assets/images/footer-logo-dark.png';

import './footer.styles.scss';

const Footer = ({ footerLogoUrl , socialMedia , address }) => (
    <div className="footerWrap">
        <FooterMenu/>
        <div className="bottomWrapper d-flex flex-wrap">
            <div className="foo_col logos_wrap">
                <div className="footer_logo">
                    <img src={footerLogoUrl} alt="Watersedge"/>
                </div>
                <div className="creator">
                    Website by
                    <a href="https://www.maya.lk/" target="_blank" rel="noopener noreferrer">
                        <img src={CreatorLogo} alt="Maya Creations" style={{ width: '100px' }} />
                    </a>
                </div>
            </div>
            <FooterContact/>
            <div className="foo_col d-flex justify-content-between flex-wrap">
                <FeaturedResturants/>
                <div className="address_wrap">
                    <i className="fas fa-map-marker-alt"></i> {address}
                </div>
                {
                    (socialMedia)?
                    <ul className="social_footer d-flex justify-content-center">
                        <li className="facebook">
                            <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                        </li>
                        <li className="youtube">
                            <a href={socialMedia.youtube} target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                        </li>
                    </ul>
                    : ''
                }                
            </div>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    footerLogoUrl : selectFooterLogoUrl,
    socialMedia : selectSocialMedia,
    address : selectAddress
});

export default connect(mapStateToProps)(Footer);