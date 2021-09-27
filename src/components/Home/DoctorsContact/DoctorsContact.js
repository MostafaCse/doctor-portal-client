import React from 'react';

const DoctorsContact = ({info}) => {
    return (
        <div className="col-md-4">
            <img className="img-fluid" src={info.img} alt=""></img>
         <center>
         <h5 style={{fontWeight:'bold'}}>{info.name}</h5> 
    <small style={{color:'grey'}}>{info.phone}</small>
         </center>
        </div>
    );
};

export default DoctorsContact;