import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faGooglePlusG, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className="row footer-container">
            <div style={{ color: 'grey', marginTop: '42px' }} className="col-md-3 col-sm-6">
                <Link className="linkRemove"><small>Imergencey Dental Care</small><br /></Link>
                <Link className="linkRemove"><small>Check Up</small> <br /></Link>
                <Link className="linkRemove"><small>Treatment of Personal Diseases</small><br /></Link>
                <Link className="linkRemove"><small>Tooth Extraction</small><br /></Link>
                <Link className="linkRemove"><small>Check Up</small><br /></Link>
            </div>

            <div style={{ color: 'grey' }} className="col-md-3 col-sm-6">
                <p style={{ color: '#1CC7C1' }}>Services</p>
                <Link className="linkRemove"><small>Imergencey Dental Care</small><br /></Link>
                <Link className="linkRemove"><small>Check Up</small> <br /></Link>
                <Link className="linkRemove"><small>Treatment of Personal Diseases</small><br /></Link>
                <Link className="linkRemove"><small>Tooth Extraction</small><br /></Link>
                <Link className="linkRemove"><small>Check Up</small><br /></Link>
                <Link className="linkRemove"><small>Check Up</small><br /></Link>
                <Link className="linkRemove"><small>Check Up</small><br /></Link>
            </div>
            <div style={{ color: 'grey' }} className="col-md-3 col-sm-6">
                <p style={{ color: '#1CC7C1' }}>Oral Health</p>
                <Link className="linkRemove"><small>Imergencey Dental Care</small><br /></Link>
                <Link className="linkRemove"><small>Check Up</small> <br /></Link>
                <Link className="linkRemove"><small>Treatment of Personal Diseases</small><br /></Link>
                <Link className="linkRemove"><small>Tooth Extraction</small><br /></Link>
                <Link className="linkRemove"><small>Check Up</small><br /></Link>
                <Link className="linkRemove"><small>Check Up</small><br /></Link>
                <Link className="linkRemove"><small>Check Up</small><br /></Link>
            </div>
            <div className="col-md-3 col-sm-6">
                <p style={{ color: '#1CC7C1' }}>Our Address</p>
                <small>New York-101010  Hudson Yards</small> <br />
                <div style={{ marginTop: '8%', marginBottom: '16%' }}>
                <Link  className="linkRemove">
                <FontAwesomeIcon style={{ color: 'white', background: '#1CC7C1', marginRight: '20px' }} size='2x' icon={faFacebookF}></FontAwesomeIcon>
                </Link>
               <Link  className="linkRemove">
               <FontAwesomeIcon style={{ color: '#1CC7C1', background: 'white', marginRight: '20px' }} size='2x' icon={faGooglePlusG}></FontAwesomeIcon>
               </Link>
              <Link  className="linkRemove">
              <FontAwesomeIcon style={{ color: '#1CC7C1', background: 'white', marginRight: '20px' }} size='2x' icon={faTwitter}></FontAwesomeIcon>
              </Link>
                </div>
                <small>Call Now</small>
                <p id="contactHighlight">+2025550295</p>
            </div>
        </section>
    );
};

export default Footer;