import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css';

const MakeAppoinment = () => {
    return (
        <section className="row appoinment-container">
            <div className="col-md-6">
                <img className="img-fluid img-container offset-2" src={doctor} alt=""></img>
            </div>
            <div className="col-md-6 text-white mt-5">
                <h6 style={{ color: '#1CC7C1' }}>APPOINTMENT</h6>
                <h1>Make an appointment <br /> Today</h1>
                <p>It is a long established fact that a reader will distractedby the readable content of a page when looking at its</p>
                <button className="btn btn-info mt-5">Learn More</button>
            </div>
        </section>
    );
};

export default MakeAppoinment;