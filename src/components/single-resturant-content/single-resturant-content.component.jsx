import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectClickedRestuant } from '../../redux/home/home.selectors';
import { setClickedRestuant } from '../../redux/home/home.actions';

import './single-resturant-content.styles.scss';

const SingleResturantContent = ({ open , clickedRestuant , setClickedRestuant }) => (
    <div className={`singleResturantContent ${open}`}>
        <div className="singleRestCont">
            <span className="viewAllRest" onclick={ () => setClickedRestuant('') }><i className="fa fa-arrow-left" aria-hidden="true"></i> View all restaurants</span>
            <div className="singleRestContInside">
                <h2 className="text-center mb-3">ThunaPaha</h2>
                <img alt="ThunaPaha Logo" src="" />
                <div className="introCont">
                    <h2>Poised on the Edge</h2>
                    <p>Surrounded by picturesque waterways on an island of its own lies Colombo’s latest authentic Sri Lankan restaurant “Thuna Paha” by Waters Edge.</p>
                    <p><strong>Inquiries : +94 77 4 827 168</strong></p>
                </div>
                <div className="singleRestBtns">
                    <span className="btn viewMenuBtn" data-menu-id="menu-429">View Menu</span>
                </div>
            </div>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    clickedRestuant : selectClickedRestuant
});

const mapDispatchToProps = dispatch => ({
    setClickedRestuant : (clickedRestuant) => dispatch(setClickedRestuant(clickedRestuant))
});

export default connect(mapStateToProps , mapDispatchToProps)(SingleResturantContent);