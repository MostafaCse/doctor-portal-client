import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/Appointment');
    }

    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1>Your New Smile <br></br> Starts Here</h1>
                <p>Sint sit deserunt do nostrud minim aute ut amet non pariatur id amet dolor. ut amet non pariatur id amet dolo</p>
                <button onClick={handleClick} className="btn btn-primary">GET APPOINMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} className="img-fluid"></img>
            </div>
        </main>
    );
};

export default HeaderMain;