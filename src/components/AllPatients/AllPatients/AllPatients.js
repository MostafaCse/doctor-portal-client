import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import AllPatientsInfo from '../AllpatientsInfo/AllPatientsInfo';
import loadingImage from '../../../images/loading-buffering.gif';
import Navbar from '../../Shared/Navbar/Navbar';
import './AllPatients.css';

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
            <Navbar/>
            <div className="col-md-2">
<Sidebar></Sidebar>
            </div>
            <div  className="col-md-10">
                   {
                       allPatients? < div id="boxHighlight">
                           <AllPatientsInfo patientsInfo={allPatients}></AllPatientsInfo>
                       </div>:
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