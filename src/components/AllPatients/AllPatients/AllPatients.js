import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import AllPatientsInfo from '../AllpatientsInfo/AllPatientsInfo';
import loadingImage from '../../../images/loading-buffering.gif';

const AllPatients = () => {
    const [allPatients,setAllPatients]=useState();

   useEffect(()=>{
    fetch('https://quiet-lake-59398.herokuapp.com/allpatients')
    .then(res=>res.json())
    .then(patientsInfo=>setAllPatients(patientsInfo))
    console.log(allPatients);
   })
    return (
        <div className="row">
            <div className="col-md-2">
<Sidebar></Sidebar>
            </div>
            <div  className="col-md-10">
              <div style={{height:'15%'}}>
              <h4>Patients</h4>
              </div>
                   {
                       allPatients? <AllPatientsInfo patientsInfo={allPatients}></AllPatientsInfo>:
                       <div style={{textAlign:'center',paddingTop:'50px'}}>
                       <img src={loadingImage} alt=""></img>
                    <h5>Please Wait, Data is Loading</h5>
                
                </div>
                   }
            </div>
        </div>
    );
};

export default AllPatients;