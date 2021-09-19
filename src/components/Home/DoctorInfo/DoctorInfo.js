import React from 'react';

const DoctorInfo = ({ info }) => {
    return (
        <div className="col-md-4">
            <div className="shadow-lg p-3 mb-5 bg-body rounded">
                <div style={{marginBottom:'30px',marginTop:'33px'}} className="row">
                    <div className="col-md-4">
     <img src={info.img}></img>
                    </div>
                    <div className="col-md-8">
                        <h6 style={{ fontWeight: 'bold' }}>{info.name}</h6>
                        <small style={{ color: 'grey' }}>{info.date}</small>
                    </div>
                </div>
    <h4>{info.advise}</h4>
    <p style={{color:'grey',marginTop:'30px',marginBottom:'20px'}}>{info.description}</p>
            </div>
        </div>
    );
};

export default DoctorInfo;