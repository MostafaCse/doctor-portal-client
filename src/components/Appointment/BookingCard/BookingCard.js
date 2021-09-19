import React, { useState } from 'react';
import AppointmentModel from '../AppointmentModel/AppointmentModel';

const BookingCard = ({ booking, date }) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }
   
    return (
        <div className="col-md-4">
            <div className="card shadow-lg p-3 mb-5 bg-body rounded">
                <div class="card-body text-center">
                    <h5 class="card-title text-brand mb-3">{booking.name}</h5>
                    <h6 class="card-subtitle mb-2 ">{booking.time}</h6>
                    <span style={{fontSize:'12px',color:'grey'}}>{booking.space}</span><br/>
                    <button onClick={openModal} className="btn-brand">BOOK APPOINTMENT</button>
                 <AppointmentModel booking={booking} date={date} modalIsOpen={modalIsOpen} closeModal={closeModal}></AppointmentModel>
                </div>

            </div>
        </div>
    );
};

export default BookingCard;