import React from 'react';

const AllPatientsInfo = ({patientsInfo}) => {
    return (
     <div>
         <h4 style={{color:'#1CC7C1'}}>All Patients</h4>
            <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Sr. No</th>
            <th scope="col">Name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Gendar</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Weight</th>
            <th scope="col">Subject</th>
            <th scope="col">date</th>
          </tr>
        </thead>
        <tbody>
        {
            patientsInfo.map((info,index)=><tr>
                <td>{index}</td>
                <td>{info.Name}</td>
                <td>{info.PhoneNumber}</td>
                <td>{info.gender}</td>
                <td>{info.Email}</td>
                <td>{info.Age}</td>
                <td>{info.weight}</td>
                <td>{info.subject}</td>
                <td>{info.date}</td>

            </tr>)
        }
        </tbody>
      </table>
     </div>
    );
};

export default AllPatientsInfo;