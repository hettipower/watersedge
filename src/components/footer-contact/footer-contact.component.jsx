import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectFooterContact } from '../../redux/common/common.selectors';

import './footer-contact.styles.scss';

const FooterContact = ({ footerContact }) => (
    <div className="foo_col contact_details_wrap text-center">
        {
            (footerContact)?
            <div className="contact_detail">
                <h4>General Inquiries</h4>
                <ul>
                    <li>TEL : {footerContact.dinnerTelephone}</li>
                    <li>Email : {footerContact.dinnerEmail}</li>
                </ul>
            </div>
            : ''
        } 

        {
            (footerContact)?
            <div className="contact_detail">
                <h4>Restaurant Reservations</h4>
                <ul>
                    <li>TEL : {footerContact.generalTelephone}</li>
                    <li>Email : {footerContact.generalEmail}</li>
                </ul>
            </div>
            : ''
        } 

        {
            (footerContact)?
            <div className="contact_detail">
                <h4>Banquet Reservations</h4>
                <ul>
                    <li>TEL : {footerContact.conferencingTelephone}</li>
                    <li>Email : {footerContact.conferencingEmail}</li>
                </ul>
            </div>
            : ''
        } 

        {
            (footerContact)?
            <div className="contact_detail">
                <h4>Director – Banquet Sales</h4>
                <ul>
                    <li>TEL : {footerContact.directorReservations}</li>
                    <li>Email : {footerContact.directorBanquetReservationsEmail}</li>
                </ul>
            </div>
            : ''
        }        
    </div>
);

const mapStateToProps = createStructuredSelector({
    footerContact : selectFooterContact
});

export default connect(mapStateToProps)(FooterContact);