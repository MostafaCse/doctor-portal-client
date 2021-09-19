import React from 'react';

const DoctorDisplayInfo = ({ item }) => {
    return (
        <div className="col-md-4">
            <p>{item.Name}</p>
            <p>{item.Email}</p>
            <img style={{ height: '200px' }} src={`data:image/png;base64,${item.Img.img}`}></img>
        </div>
    );
};

export default DoctorDisplayInfo;