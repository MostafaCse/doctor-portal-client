import React, { useState, useEffect, useContext } from 'react';
import AppointmentByDate from '../AppointmentsByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Dashboard.css';
import { doctorContext } from '../../../App';

const Dashboard = () => {
    const [logInUser, setLogInUser] =useContext(doctorContext);
    const [selectDate, setSelectDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
console.log(logInUser);
    const handleChange = dateTime => {
        const date = dateTime.toDateString()
        setSelectDate(date);
    }

    useEffect(() => {

        fetch('https://quiet-lake-59398.herokuapp.com/appointmentsByDate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ date: selectDate, email: sessionStorage.getItem('email') }),
        }
        )
            .then(res => res.json())
            .then(result => {
                setAppointments(result);
                console.log(result, appointments);
            })
    }, [selectDate])

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-5">
                <h5 className="mt-4">Appointment</h5>
                <div>
                    <Calendar className="calendarHighlight shadow-lg p-3 mb-5 bg-body rounded"
                        onChange={handleChange}
                        value={new Date()}
                    />
                </div>
            </div>
            <div className="col-md-5">
                <AppointmentByDate key={appointments.Email} appointments={appointments}></AppointmentByDate>
            </div>
        </div>
    );
};

export default Dashboard;