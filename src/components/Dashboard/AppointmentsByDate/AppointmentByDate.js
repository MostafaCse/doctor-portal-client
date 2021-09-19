import React from 'react';

const AppointmentByDate = ({ appointments}) => {
  
    return (
        <div style={{ marginTop: '16%' }} className="shadow-lg p-3 mb-5 bg-body rounded">

            <div class="d-flex bd-highlight mb-3">
                <div class="me-auto p-2 bd-highlight"><p style={{ fontWeight: 'bold' }} className="text-brand">Appointments</p></div>
                <div class="p-2 bd-highlight"><p style={{ color: 'grey' }}></p></div>
            </div>

            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        appointments.map(app => <tr>
                            <td>{app.Name}</td>
                            <td>{app.Email}</td>
                            <td>{app.PhoneNumber}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentByDate;