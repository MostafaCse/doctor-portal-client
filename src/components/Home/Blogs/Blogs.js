import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import DoctorInfo from '../DoctorInfo/DoctorInfo';
import './Blogs.css';
import curdi from '../../../images/Ellipse 1.png';
import jhon from '../../../images/Ellipse 3.png';

const doctorData = [
    {
        name: 'Dr. Caudi',
        date: '23 apri 2021',
        img:curdi,
        advise: '2 times of brush in a day can keep you healthy',
        description: 'It is long established fact that by readable contact of a lot layout The point.'
    },
    {
        name: 'Dr. jhon Mitchel',
        date: '23 apri 2021',
        img:jhon,
        advise: 'The tooth cancer is taking a challenge',
        description: 'It is long established fact that by readable contact of a lot layout The point.'
    }
]

const Blogs = () => {
    return (
        <section style={{ marginTop: '10%' }}>
            <div style={{ textAlign: 'center' }}>
                <h6 style={{ color: '#1CC7C1' }}>OUR BLOG</h6>
                <h1 style={{marginBottom:'10%'}}>From Our Blog News</h1>
            </div>
           <div className="d-flex justify-content-center">
           <div className="row w-75">
                <div className="col-md-4">
                    <div className="shadow-lg p-3 mb-5 special-container rounded">
                       
                       <h5 style={{ marginTop: '40px' }}>Rashed Kabir</h5>
                        <small>22 Aug 2021</small>
                        <h4 style={{ marginTop: '30px', marginBottom: '55px' }}>Check at least a doctor in a<br />year for your teeth</h4>
                        <FontAwesomeIcon style={{ marginBottom: '20px' }} size="3x" icon={faArrowRight}></FontAwesomeIcon>
                    
                    </div>
                </div>
             {
                 doctorData.map(info=><DoctorInfo info={info}></DoctorInfo>)
             }
                
            </div>
           </div>
        </section>
    );
};

export default Blogs;