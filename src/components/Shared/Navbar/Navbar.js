import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = ({ textColor }) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link me-5" to="/Home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link me-5" to="/Appointment">Appointment</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link me-5" to="/Appointment/Dashboard">Dashboard</Link>
                        </li>
                        <li class="nav-item">
                            <Link style={{ color: `${textColor}` }} class="nav-link me-5" to="/Doctors">Doctors</Link>
                        </li>
                        <li class="nav-item">
                            <Link style={{ color: `${textColor}` }} class="nav-link me-5" to="/Testmonials">Reviews</Link>
                        </li>
                        <li class="nav-item">
                            <Link style={{ color: `${textColor}` }} class="nav-link me-5" to="/ContactUs">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;