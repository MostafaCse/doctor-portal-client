import { faDashcube } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt, faCog, faFileMedicalAlt, faSignOutAlt, faUser, faUserClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { doctorContext } from '../../../App';
import './Sidebar.css';

const Sidebar = () => {
    const [logInUser, setLogInUser] = useContext(doctorContext);
    const [isDoctor, setIsDoctor] = useState(false);
    setLogInUser(sessionStorage.getItem('email'));
    fetch('https://quiet-lake-59398.herokuapp.com/isDoctor', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Email: logInUser }),
    }
    )
        .then(res => res.json())
        .then(result => {
            if (result) {
                setIsDoctor(true)
            }
            else {
                setIsDoctor(false);
            }
        })
    return (
        <div className="sidebar-container">

            <Link className="linkHighlight" to='/Appointment/Dashboard'><p><FontAwesomeIcon style={{ marginRight: '5%' }} icon={faDashcube}></FontAwesomeIcon> Dashboard</p></Link>

            <Link className="linkHighlight">
                <p><FontAwesomeIcon style={{ marginRight: '5%' }} icon={faCalendarAlt}></FontAwesomeIcon>Appointment</p>
            </Link>

            <Link className="linkHighlight" to='/Appointment/AllPatients'>
                <p><FontAwesomeIcon style={{ marginRight: '5%' }} icon={faUser}></FontAwesomeIcon>Patients</p>
            </Link>

            <Link className="linkHighlight" to="/Appointment/AllPatients">
                <p><FontAwesomeIcon style={{ marginRight: '5%' }} icon={faFileMedicalAlt}></FontAwesomeIcon>Prescriptions</p>
            </Link>

            {
                <Link className="linkHighlight" to='/Appointment/addDoctors'>
                    <p><FontAwesomeIcon style={{ marginRight: '5%' }} icon={faUserClock}></FontAwesomeIcon>Add Doctors</p></Link>
            }
            <Link className="linkHighlight" >
                <p><FontAwesomeIcon style={{ marginRight: '5%' }} icon={faCog}></FontAwesomeIcon>Setting</p>
            </Link>

            <Link className="linkHighlight" to="/Home">
                <p><FontAwesomeIcon style={{ marginRight: '5%', marginTop: '207px' }} icon={faSignOutAlt}></FontAwesomeIcon>Log Out</p>
            </Link>
        </div>
    );
};

export default Sidebar;