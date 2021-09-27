import React from 'react';

const ServicesDetails = ({ serviecs }) => {
    return (
        <div style={{textAlign:'center'}} className="col-md-4">
    
       
          <img style={{height:'40%'}} src={serviecs.img} alt=""></img>
    
            <h5 style={{marginTop:'50px',marginBottom:'50px'}} >{serviecs.name}</h5>
            <p>Voluptate est ut in amet.Eiusmod incididunt culpa elit deserunt.Qui culpa eu ea nostrud ea non duis do.</p>
           </div>

    );
};

export default ServicesDetails;