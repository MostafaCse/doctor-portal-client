import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
 
const BookingDate=[
    {
        id:1,
        name:'Teeth Orthodontics',
        time:'8:00 AM - 9:00 AM',
        space:'10 SPACES AVAILABLE'
    },
    {
        id:2,
        name:'Cosmetic Dentistry',
        time:'10:05 AM - 11:30 AM',
        space:'16 SPACES AVAILABLE'
    },
    {
        id:3,
        name:'Teeth Cleaning',
        time:'5:00 PM - 6:30 PM',
        space:'9 SPACES AVAILABLE'
    },
    {
        id:4,
        name:'Cavity Protection',
        time:'7:00 PM - 8:30 PM',
        space:'10 SPACES AVAILABLE'
    },
    {
        id:5,
        name:'Gastic Problem',
        time:'6:00 PM - 11:00 PM',
        space:'110 SPACES AVAILABLE'
    },
    {
        id:6,
        name:'Diabatic Problem',
        time:'8:00 AM - 10:00 AM',
        space:'111 SPACES AVAILABLE'
    }
]
const BookAppointment = ({date}) => {
  
    return (
        <div>
           <h2 className="text-center text-brand mt-5">Available Appointments on {date.toDateString()}</h2>
        
          <div style={{marginLeft:'5%',marginRight:'5%',marginTop:'5%'}} className="row">
           {
               BookingDate.map(info=><BookingCard booking={info} date={date}></BookingCard>)
           }
           </div>
          </div>
    );
};

export default BookAppointment;