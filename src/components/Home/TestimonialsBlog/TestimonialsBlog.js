import React from 'react';

const TestimonialsBlog = ({ info }) => {
    return (
        <div className="col-md-4">
            <div style={{ width: '24rem', height: '27rem' }} className="shadow-lg p-3 mb-5 bg-body rounded">
                <center> <p style={{marginTop:'8%'}}>{info.description}</p></center>
                <div style={{marginTop:'20%'}} className="row">
                    <div className="col-md-4">
                        <img className="offset-2" src={info.img}></img>
                    </div>
                    <div className="col-md-8">
                        <h5 style={{ color: '#1CC7C1' }}>{info.name}</h5>
                        <p style={{ color: 'grey' }}>{info.location}</p>
                    </div>
                </div>
                
            </div>
        </div>

    );
};

export default TestimonialsBlog;