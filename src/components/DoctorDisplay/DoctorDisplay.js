import React, { useEffect, useState } from 'react';
import DoctorDisplayInfo from './DoctorDisplayInfo/DoctorDisplayInfo';
import loadingImage from '../../images/loading-buffering.gif';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const DoctorDisplay = () => {
    const [info, setInfo] = useState();
    useEffect(() => {
        fetch('https://quiet-lake-59398.herokuapp.com/doctorsFound')
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [])

    return (
        <div>
            <Navbar/>
        <div className="row">
            {
                info ? info.map(item => <DoctorDisplayInfo item={item} key={item.Name}></DoctorDisplayInfo>) :
                    <div style={{textAlign:'center',paddingTop:'50px'}}>
                           <img src={loadingImage} alt=""></img>
                        <h5>Please Wait, Data is Loading</h5>
                    
                    </div>
            }
        </div>
        <Footer></Footer>
        </div>
    );
};

export default DoctorDisplay;